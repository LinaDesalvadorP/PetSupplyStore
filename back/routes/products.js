const express= require("express");
const router=express.Router();

const {getProducts, createProduct, getProductById, updateProduct, removeProduct} = require("../controllers/ProductsController");
const { isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");

//establece la ruta en la que veremos getProducts
router.route('/products').get(isAuthenticatedUser, authorizeRoles("admin"), getProducts);
//Ruta para el post de crear productos
router.route('/products/new').post(createProduct);
//Ruta para buscar producto por id
router.route('/products/:id').get(getProductById);
//Ruta para actualizar producto
router.route('/products/:id').put(updateProduct);
//Ruta para eliminar un producto por id
router.route('/products/:id').delete(removeProduct);

module.exports=router;