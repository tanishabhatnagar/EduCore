const userRoute = require("../controllers/userController");


const router = require("express").Router();

router.route("/register").post(userRoute.register);
router.route("/login").post(userRoute.login);
module.exports = router;
