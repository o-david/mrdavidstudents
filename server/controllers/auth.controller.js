import { generatePassword } from "easy_random_password";
import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { sendApplicationStatusEmail, sendApprovalRequestEmail } from "../utils/mailsender/emails.js";
import { generateToken } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
	const { email, firstName,lastName  } = req.body;

	try {
		if (!email || !lastName || !firstName) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await User.findOne({ email });
		userAlreadyExists && console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

    const password = generatePassword(10, {
      includeNumbers: true,
      includeAlphabet: true,
      includeSpecial: true,
      includelowerCase: true,
      includeupperCase: true,
    })
		const user = new User({
			email,
			firstName,
      lastName,
      password,
      username: email
		});

		await user.save();

		await sendApprovalRequestEmail(process.env.ADMIN_EMAIL, user);

		res.status(201).json({
			success: true,
			message: "Your application has been successfully submitted. You will receive an email notification regarding the approval or rejection of your application.",
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

export const approveUserViaLink = async (req, res) => {
  const { userId, status } = req.query; // Extract userId and status from query parameters
  console.log("userId", userId)
  console.log("status", status)
  try {
    // Validate status
    if (!['accepted', 'rejected'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status. Must be "accepted" or "rejected".' });
    }

    const password = generatePassword(10, {
      includeNumbers: true,
      includeAlphabet: true,
      includeSpecial: true,
      includelowerCase: true,
      includeupperCase: true,
    })
    const hashedPassword = await bcryptjs.hash(password, 10);


    // Find the user by ID and update the application status
    const user = await User.findByIdAndUpdate(
      userId,
      { applicationStatus: status, password: hashedPassword },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    await sendApplicationStatusEmail(user, status, password);

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Approval Status</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
              }
              .container {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  text-align: center;
              }
              h1 {
                  color: #333;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>${status === 'accepted' ? 'User has been accepted.' : 'User has been rejected.'}</h1>
              <a href=${process.env.NODE_ENV === "development" ? "http://localhost:4002/admin" : "https://yourdomain.com/admin"}>Go back to dashboard</a>
          </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Error approving user:', error);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
		const isPasswordValid = await bcryptjs.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
    if(user.applicationStatus !== "accepted"){
      return res.status(400).json({ success: false, message: "Your application is not approved yet" });
    }


		const token = generateToken(user._id);

		user.lastLogin = new Date();
		await user.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
      token
		});
	} catch (error) {
		console.log("Error in login ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

export const getProfile = async (req, res) => {
	const { username } = req.params;
	
	try {
		const user = await User.findOne({ username }).select("-password");
		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log("Error in getProfile ", error);
		res.status(500).json({ success: false, message: error.message });
	}
};
export const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log("Error in checkAuth ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};



export const logout = async (req, res) => {
	res.clearCookie("token");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};
 