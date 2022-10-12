const product=require("../models/products")
//Ver lista de productos
exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        success: true,
        message: "Lista de productos"
    })
}

//Crear nuevo producto /api/products
exports.createProduct=async(req, res, next)=>{
    const newProduct=await product.create(req.body);
    res.status(201).json({
        success:true,
        newProduct
    })
}
