const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();

router.route('/user/register').post(registerUser)
router.route('/login').get(loginUser)

module.exports = router