const router = require("express").Router();
//const userController = require("../controllers/user-controller");

//login
router.route("/").get(userController.index).post(userController.auth)
//sign up
//reciept
//payment
//confirmation

module.exports = router;