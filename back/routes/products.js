const express= require("express");
const router=express.Router();

const {getProducts} = require("../controllers/ProductsController")

//establece la ruta en la que veremos getProducts
router.route('/products').get(getProducts)
module.exports=router;