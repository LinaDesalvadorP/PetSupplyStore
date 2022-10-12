const product=require("../models/products")

//Ver lista de productos
exports.getProducts=async(req,res,next)=>{
    const products=await product.find();

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

//Buscar un producto

//Crear nuevo producto /api/products
exports.createProduct=async(req, res, next)=>{
    const newProduct=await product.create(req.body);
    res.status(201).json({
        success:true,
        newProduct
    })
}
