const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
} = require("../controllers/projectController");

// router
const router = express.Router();

// GET all projects
router.get("/", getAllProjects);

// GET single project
router.get("/:id", getSingleProject);

// POST a project
router.post("/", postProject);

// DELEAT project
router.delete("/:id", (req, res) => {
  res.json({ message: "DELEAT a project" });
});

// UPDATE a project
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a project" });
});

module.exports = router;
