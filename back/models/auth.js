const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please type the name"],
        maxlength: [120, "Name cannot exceed 120 characters"]
    },
    email:{
        type:String,
        required:[true, "Please type the email"],
        unique: true, //valida que el email no este registrado previamente
        validate: [validator.isEmail, "Please type a valid email"]
    },
    password:{
        type: String,
        required:[true, "Please type the password"],
        minlength: [8, "Password cannot be less tha 8 characters"],
        select: false // Campo no visible
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String, // Genera un token para poder cambiar la contraseña 
    resetPasswordExpire: Date //Vencimiento del token generado para cambiar la contraseña
})

module.exports = mongoose.model("auth", userSchema)