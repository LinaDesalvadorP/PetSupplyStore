const express= require("express");
const router=express.Router();

const {getProducts, createProduct} = require("../controllers/ProductsController")

//establece la ruta en la que veremos getProducts
router.route('/products').get(getProducts);
//Ruta para el post de crear productos
router.route('/products/new').post(createProduct);

module.exports=router;