const express = require("express");
const { registerUser, loginUser, logOut } = require("../controllers/authController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route('/user/register').post(registerUser)
router.route('/login').get(loginUser)
router.route('/logout').get(isAuthenticatedUser, logOut)
module.exports = router