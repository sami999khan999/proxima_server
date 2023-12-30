const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleatProject,
  updateProject,
} = require("../controllers/projectController");
const requireAuth = require("../middlewares/requireAuth");

// router
const router = express.Router();

router.use(requireAuth);

// GET all projects
router.get("/", getAllProjects);

// GET single project
router.get("/:id", getSingleProject);

// POST a project
router.post("/", postProject);

// DELEAT project
router.delete("/:id", deleatProject);

// UPDATE a project
router.patch("/:id", updateProject);

module.exports = router;
