import { Project } from "../models/projectModel.js";

export const addProject = async (req, res) => {

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

export const getProjects = async (req, res) => {

  try {
    const { type, technologies, id } = req.query;
    const query = {};
    if (id) query.devId = id;
    if (type) query.type = type;
    if (technologies) query.technologies = { $in: technologies.split(",") };
    const projects = await Project.find(query);
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};  