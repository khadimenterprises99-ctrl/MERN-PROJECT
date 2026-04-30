const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// Create course
router.post("/", async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
});

// Get courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;