const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors")
const cookieParser = require("cookie-parser") //Permite analizar las cookies que llegan

//Uso de constesntes importadas
app.use(express.json());
app.use(cookieParser());

//Importar rutas
const products=require("./routes/products")
const users = require("./routes/auths")

app.use('/api', products)
app.use('/api', users)
//Middleware para manejo de errores
app.use(errorMiddleware)

module.exports=app