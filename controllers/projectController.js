const mongoose = require("mongoose");
const Project = require("../models/projectModel");

// Get all projectsz
const getAllProjects = async (req, res) => {
  const projects = await Project.find({});

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
  const data = req.body;

  try {
    const project = await Project.create({
      ...data,
    });

    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// deleat a project

// update a project

module.exports = {
  postProject,
  getAllProjects,
  getSingleProject,
};