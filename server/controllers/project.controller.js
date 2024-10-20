import { Project } from "../models/projectModel.js";
import User from "../models/userModel.js";
import mongoose from "mongoose";

export const addProject = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, desc, imgUrl, type, technologies, liveUrl, githubUrl } =
      req.body;

    if (
      !name ||
      !desc ||
      !imgUrl ||
      !type ||
      !technologies ||
      !liveUrl ||
      !githubUrl
    ) {
      throw new Error("All fields are required");
    }

    const project = new Project({
      name,
      desc,
      imgUrl,
      type,
      technologies,
      liveUrl,
      githubUrl,
      devId: req.userId,
    });

    await project.save({ session });

    // Update user's skills with new technologies
    await User.findByIdAndUpdate(
      req.userId,
      { $addToSet: { skills: { $each: technologies } } },
      { session, new: true }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message:
        "Your project has been created successfully and your skills have been updated",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const { type, technologies, id, username } = req.query;
    const query = {};
    if (id) query.devId = id;
    if (type) query.type = type;
    if (technologies) query.technologies = { $in: technologies.split(",") };

    // If username is provided, find the user and filter by their ID
    if (username) {
      const user = await User.findOne({ username });
      if (user) {
        query.devId = user._id; // Set devId to the found user's ID
      } else {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
    }

    const projects = await Project.find(query)
      .populate({
        path: "devId",
        select: "firstName lastName username",
      })
      .sort({ _id: -1 })
      .lean();
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { projectId } = req.params;

    // Find the project
    const project = await Project.findById(projectId).session(session);

    if (!project) {
      throw new Error("Project not found");
    }

    // Check if the user is authorized to delete this project
    if (project.devId.toString() !== req.userId) {
      throw new Error("Not authorized to delete this project");
    }

    // Delete the project
    await Project.findByIdAndDelete(projectId).session(session);

    // Get all projects of the user to determine which skills to keep
    const userProjects = await Project.find({ devId: req.userId }).session(
      session
    );
    const remainingSkills = new Set(
      userProjects.flatMap((p) => p.technologies)
    );

    // Update user's skills
    await User.findByIdAndUpdate(
      req.userId,
      { $set: { skills: Array.from(remainingSkills) } },
      { session, new: true }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      success: true,
      message: "Project deleted successfully and skills updated",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({ success: false, message: error.message });
  }
};
