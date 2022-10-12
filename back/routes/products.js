const express= require("express");
const router=express.Router();

const {getProducts, createProduct, getProductById, updateProduct} = require("../controllers/ProductsController")

//establece la ruta en la que veremos getProducts
router.route('/products').get(getProducts);
//Ruta para el post de crear productos
router.route('/products/new').post(createProduct);
//Buscar producto por id
router.route('/products/:id').get(getProductById);
//Actualizar producto
router.route('/products/:id').put(updateProduct);
module.exports=router;