import { Project } from "../models/projectModel.js";

export const addProject = async (req, res) => {
    console.log("i got here");
  const { name, desc, imgUrl, type, technologies, liveUrl, githubUrl } =
    req.body;
  try {
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

    await project.save();

    res.status(201).json({
      success: true,
      message:
        "Your project has been created successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
