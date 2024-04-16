import User from "../models/userModel.js";
import emailSender from "../utils/emailSender.js";
import generatecode from "../utils/generatecode.js";



const registerUser = async (req,res) => {
  try {
  const {firstName, lastName, email, password} = req.body
  
  const userExists = await User.findOne({email});
  if(userExists && userExists.status !== "pending") {
    res.status(401).send("User already exists")
  }
  if (userExists) {
    await User.deleteOne({ _id: userExists._id });
  }
  const verificationCode = generatecode()
  
  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    verificationCode
  })
  const user = await newUser.save()
  emailSender(email, "Verification", verificationCode )
  res.send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}

const verifyMail = async (req,res) => {
  try{

    const {email, verificationCode} = req.body
    const user = await User.findOne({email})
    if(user.verificationCode === verificationCode) {
      user.status = "awaiting approval"
      user.verificationCode = ""
      const updatedUser = await user.save()
      res.send(updatedUser)
    } else {
      res.status(400).send("Invalid verification code")
    }
  }catch (error) {
    res.status(400).send(error)
  }
}
const resendCode = async (req,res) => {
  try{

    const {email} = req.body
    const user = await User.findOne({email})
    if(user.status === 'pending'){
      const verificationCode = generatecode()
      user.verificationCode = verificationCode
      const updatedUser = await user.save()
      emailSender(email, "Verification", verificationCode )
      res.send(updatedUser)
    } else {
      res.status(400).send("User is not pending")
    }
    
  }catch (error) {
    res.status(400).send(error)
  }
}
  
  export { registerUser, verifyMail, resendCode}