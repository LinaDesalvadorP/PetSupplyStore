const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors")

app.use(express.json());

//Importar rutas
const products=require("./routes/products")
const users = require("./routes/auths")

app.use('/api', products)
app.use('/api', users)
//Middleware para manejo de errores
app.use(errorMiddleware)

module.exports=app