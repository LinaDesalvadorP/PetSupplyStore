//Crea y envía un token almacenado en una cookie
const tokenSend = (user, statusCode, res)=>{
    //Crea el token 
    const token = user.getJwtToken();
    
    //Configuración del token en el navegador
    const Options= {
        //Duración en el navegador en milisegundos
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRATION_TIME*24*60*60*1000
        ),
        httpOnly:true
    }
    res.status(statusCode).cookie("token", token, Options).json({
        success:true,
        token,
        user
    }) 
}

module.exports = tokenSend;