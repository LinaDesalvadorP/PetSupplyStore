const express = require("express");
const app = express();

app.use(express.json());

//Importar rutas
const products=require("./routes/products")

app.use('/api', products)
module.exports=app