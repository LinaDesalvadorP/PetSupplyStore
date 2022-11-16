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
    const token= user.getJwtToken();

    res.status(201).json({
        success: true, 
        token,
        user
    })
})

// Login
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
    const {email, password} = req.body;

    //Validación de campos vacios
    if(!email || !password){
        return next(new ErrorHandler("Please type email and password", 400))
    }

    //Buscar usuario en BD
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Email or password invalid", 401))
    }

    //validar contraseña
    const passwordOK = await user.comparePassword(password)

    if(!passwordOK){
        return next(new ErrorHandler("Invalid password", 401))
    }
    
    const token= user.getJwtToken();

    res.status(201).json({
        success: true, 
        token,
        user
    })
})