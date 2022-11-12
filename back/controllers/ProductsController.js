const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const productM =require("../models/products");
const ErrorHandler = require("../utils/errorHandler");
const fetch=(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Crear nuevo producto /api/products
exports.createProduct= catchAsyncErrors( async(req, res, next)=>{
    const newProduct=await productM.create(req.body);
    res.status(201).json({
        success:true,
        newProduct
    })
})

//Ver lista de productos
exports.getProducts= catchAsyncErrors( async(req,res,next)=>{
    const products=await productM.find();

    if(!products){
        return res.status(404).json({
            success:false,
            error: true,
        })
    }

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
})

//Buscar un producto por id
exports.getProductById= catchAsyncErrors( async(req,res,next)=>{
    const product =  await productM.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }
    res.status(200).json({
        success:true,
        product
    })
})

//Actualizar producto 
exports.updateProduct= catchAsyncErrors( async (req,res,next)=>{
    //Busca el producto
    //Se declara como un let porque la variable cambia
    let productFound = await productM.findById(req.params.id);
    if(!productFound){
        return res.status(404).json({
            success:false,
            message:"No se encontró el producto"
        })
    }
    //Toma los datos del body de la petición y los actualiza
    productFound = await productM.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valida sólo los atributos nuevos del req.body
        runValidators:true
    });
    res.status(200).json({
        success:true,
        message: "El producto fue actualizado",
        productFound
    })
})

//Eliminar producto
exports.removeProduct=catchAsyncErrors( async (req,res,next)=>{
    //Busca el producto
    const productFound = await productM.findById(req.params.id);
    if(!productFound){
        return next(new ErrorHandler("Product not found", 404))
    }
    await productFound.remove();
    res.status(200).json({
        success: true,
        message: "Producto eliminado correctamente."
    })
})

/* Fetch: herramienta utilizada para hacer consultas,
debe ser instalada con: npm i node-fetch y puede ser
importado como se muestra en la línea 2"*/

function getProductsUsingFetch(){
    fetch('http://localhost:4000/api/products')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

// Muestra en consola los productos
//getProductsUsingFetch(); 

function getProductByIdUsingFetch(id){
    fetch('http://localhost:4000/api/products/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//getProductByIdUsingFetch('63460cbc037e05dd144269ff')