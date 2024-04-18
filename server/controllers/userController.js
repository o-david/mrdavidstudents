import User from "../models/userModel.js";
import emailSender from "../utils/emailSender.js";
import generateToken from "../utils/generateToken.js";
import generatecode from "../utils/generatecode.js";



const registerUser = async (req,res) => {
  
  const {firstName, lastName, email, password} = req.body
  
  const userExists = await User.findOne({email});
  if(userExists && userExists.status !== "pending") {
    return res.status(401).send("User already exists")
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
  
}

const verifyMail = async (req,res) => {
  try{

    const {email, verificationCode} = req.body
    const user = await User.findOne({email})
    if(user.verificationCode === verificationCode) {
      user.status = "awaiting approval"
      user.verificationCode = ""
      const updatedUser = await user.save()
      res.json(updatedUser)
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
  


const authenticateUser = async (req, res) => {
  const {credentials, password} = req.body
  if (!credentials ||!password){
      res.status(400).json({message: "Please fill in all fields"})
  }
 try{

     let user = await User.findOne({email:credentials});
     if(!user){
         user = await User.findOne({firstName:credentials});
         if(!user){
             res.status(400).json({message: "User does not exist"})
          }        
      }
      
      const isMatch = await user.matchPassword(password);
      if(!isMatch){
          res.status(400).json({message: "Invalid password"})
      }
      
      res.status(200).json({message: "User authenticated successfully", token: generateToken({id:user._id, email:user.email, firstName:user.firstName, lastName:user.lastName})})
  }catch(err){
      res.status(401).send("i failed because:" + err)
  } 
      
  }

  export { registerUser, verifyMail, resendCode, authenticateUser}