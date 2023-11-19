const express = require("express");

// router
const router = express.Router();

// GET all projects
router.get("/", (req, res) => {
  res.json({ message: "GET all projects" });
});

// GET single project
router.get("/:id", (req, res) => {
  res.json({ message: "GET single project" });
});

// POST a project
router.post("/", (req, res) => {
  res.json({ message: "POST a project" });
});

// DELEAT project
router.delete("/", (req, res) => {
  res.json({ message: "DELEAT a project" });
});

// UPDATE a project
router.patch("/", (req, res) => {
  res.json({ message: "UPDATE a project" });
});

module.exports = router;
