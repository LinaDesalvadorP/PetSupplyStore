const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

//Registrar un nuevo usuario -> route: api/user/register
exports.registerUser = catchAsyncErrors(async (req, res, next)=>{
    const {name, email, password} = req.body;

    const user = await User.create({
        name, 
        email,
        password,
        avatar:{
            public_id: "123456789123456789",
            url: "../images/avatar.png"
        }
    })

    res.status(201).json({
        success: true, 
        user
    })
})