const Course = require('../models/courseModel');

// Get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('teacher', 'name email'); // Populating teacher details
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new course
exports.createCourse = async (req, res) => {
    const { title, description, price, teacher } = req.body;

    const course = new Course({
        title,
        description,
        price,
        teacher
    });

    try {
        const newCourse = await course.save();
        return res.status(201).json({
            message: "Courses added",
            status: true,
            newCourse,
          });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
