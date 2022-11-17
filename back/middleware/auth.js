//Protección de rutas
const User = require("../models/auth")
const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

//Verificando si esta autenticado (existencia y veracidad del token)
exports.isAuthenticatedUser = catchAsyncErrors( async(req, res, next)=>{
    const {token} = req.cookies
    //Si las cookies no traen un token
    if(!token){
        return next(new ErrorHandler("You must be logged in to access this resource.", 401))
    }
    const decoded = jwt.decode(token, process.env.JWT_SECRET)
    req.user=await User.findById(decoded.id);
    next()
})

//Identificando el rol del usuario 
exports.authorizeRoles=(...roles)=>{
    return (req, res, next) =>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role (${req.user.role}) is not authorized`, 403))
        }
        next()
    }
}