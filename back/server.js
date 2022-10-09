const app=require("./app");
const connectDatabase = require("./config/database");

//Settear el archivo de configuración
const dotenv=require("dotenv");
dotenv.config({path:'back/config/config.env'});

//Configuración de la base de datos
connectDatabase();

//Llama al servidor
const server=app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`);
});
