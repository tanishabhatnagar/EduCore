const courseRoute = require("../controllers/courseController");
const router = require("express").Router();

router.route("/allcourses").get(courseRoute.getAllCourses); // Use GET for fetching courses
router.route("/addcourse").post(courseRoute.createCourse); // Use POST for adding a course

module.exports = router;
