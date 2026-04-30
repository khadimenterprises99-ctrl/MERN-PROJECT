const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Create student
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

// Get students
router.get("/", async (req, res) => {
  const students = await Student.find().populate("courses");
  res.json(students);
});

// Enroll student in course
router.post("/enroll", async (req, res) => {
  const { studentId, courseId } = req.body;

  const student = await Student.findById(studentId);
  student.courses.push(courseId);
  await student.save();

  res.json({ message: "Enrolled Successfully" });
});

module.exports = router;