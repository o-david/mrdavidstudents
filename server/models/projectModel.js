import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  imgUrl: {
    type: String,
    required: true,
    trim: true,
  },
  type:{
    type: String,
    enum: ["web", "mobile", "software"], // Define the possible project types
    required: true,
  },
  technologies:{
    type: [String],
    required: true,
  },
  devId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  liveUrl: String,
  githubUrl: String,
  
},
{
  timestamps: true,
});
const projectLikesSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "projects" },
  })

export const Project = mongoose.model("projects", projectSchema);
export const ProjectLikes = mongoose.model("project_likes", projectLikesSchema);

