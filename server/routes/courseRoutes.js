const courseRoute = require("../controllers/courseController");
const router = require("express").Router();

router.route("/allcourses").get(courseRoute.getAllCourses); 
router.route("/addcourse").post(courseRoute.createCourse); 
router.route("/deletecourse/:id").delete(courseRoute.deleteCourse); 

module.exports = router;
