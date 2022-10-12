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

//Buscar un producto por id
exports.getProductById=async(req,res,next)=>{
    const productFound = await product.findById(req.params.id);
    if(!productFound){
        return res.status(404).json({
            success:false,
            message:"No se encontró el producto"
        })
    }
    res.status(200).json({
        success:true,
        productFound
    })
}

//Actualizar producto 
exports.updateProduct= async (req,res,next)=>{
    //Busca el producto
    //Se declara como un let porque la variable cambia
    let productFound = await product.findById(req.params.id);
    if(!productFound){
        return res.status(404).json({
            success:false,
            message:"No se encontró el producto"
        })
    }
    //Toma los datos del body de la petición y los actualiza
    productFound = await product.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valida sólo los atributos nuevos del req.body
        runValidators:true
    });
    res.status(200).json({
        success:true,
        message: "El producto fue actualizado",
        productFound
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
