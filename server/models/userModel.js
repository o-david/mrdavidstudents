import mongoose from "mongoose";
import { generatePassword } from "easy_random_password";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  certifications: {
    type: [String],
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  currentRole:{
    type: String,
  },
  education:[{
    degree: String,
    fieldOfStudy: String,
    institution: String,
    startDate: Date,
    endDate: Date,
  }],
  experience:[{
    company: String,
    position: String,
    startDate: Date,
    endDate: Date,
    achievements: [String],
  }],
  address:{
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  profilePicture: {
    type: String,
  },
  userType: {
    type: String,
    enum: ["admin", "student"], // Define the possible user types
    default: "student", // Default user type
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  skills: {
    type: [String],
  },
  bio: {
    type: String,
    trim: true,
  },
  applicationStatus: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  credentials: {
    type: String, // This could be a token or any other credential type
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  socials: {
    linkedIn: {
      type: String,
    },
    twitter: {
      type: String,
    },
    github: {
      type: String,
    },
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpiresAt: Date,
  verificationToken: String,
  verificationTokenExpiresAt: Date,
});

// Middleware to update the updatedAt field before saving
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
