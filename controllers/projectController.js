const mongoose = require("mongoose");
const Project = require("../models/projectModel");

// Get all projectsz
const getAllProjects = async (req, res) => {
  const user_id = req.user._id;

  const projects = await Project.find({ user_id }).sort({ createdAt: -1 }); // sorted in decending order

  res.status(200).json(projects);
};

// Get a single project
const getSingleProject = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id!" });
  }

  const project = await Project.findById(id);

  if (!project) {
    return res.status(404).json({ error: "Project not found!" });
  }

  res.status(200).json(project);
};

// post a new project
const postProject = async (req, res) => {
  const { title, tech, budget, duration, manager, dev } = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!tech) {
    emptyFields.push("tech");
  }

  if (!budget) {
    emptyFields.push("budget");
  }

  if (!duration) {
    emptyFields.push("duration");
  }

  if (!manager) {
    emptyFields.push("manager");
  }

  if (!dev) {
    emptyFields.push("dev");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const user_id = req.user._id;
    const project = await Project.create({
      ...req.body,
      user_id,
    });

    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// deleat a project
const deleatProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id!" });
  }

  const project = await Project.findOneAndDelete({ _id: id });

  if (!project) {
    return res.status(400).json({ error: "Project not found!" });
  }

  res.status(200).json(project);
};

// update a project
const updateProject = async (req, res) => {
  const id = req.params.id;

  const { title, tech, budget, duration, manager, dev } = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!tech) {
    emptyFields.push("tech");
  }

  if (!budget) {
    emptyFields.push("budget");
  }

  if (!duration) {
    emptyFields.push("duration");
  }

  if (!manager) {
    emptyFields.push("manager");
  }

  if (!dev) {
    emptyFields.push("dev");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id!" });
  }

  const project = await Project.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (!project) {
    return res.status(400).json({ error: "Project not found!" });
  }

  res.status(200).json(project);
};

module.exports = {
  postProject,
  getAllProjects,
  getSingleProject,
  deleatProject,
  updateProject,
};
