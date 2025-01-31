const Course = require('../models/courseModel');

// Get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find(); // Ensure all fields are returned
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new course
exports.createCourse = async (req, res) => {
    const { title, description, price, image, teacher, information } = req.body;

    const course = new Course({
        title,
        description,
        price,
        image,
        teacher,
        information // Make sure to include this field
    });

    try {
        const newCourse = await course.save();
        return res.status(201).json({
            message: "Course added",
            status: true,
            newCourse,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });

        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
