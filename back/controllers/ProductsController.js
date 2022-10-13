const product=require("../models/products")
const fetch=(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Crear nuevo producto /api/products
exports.createProduct=async(req, res, next)=>{
    const newProduct=await product.create(req.body);
    res.status(201).json({
        success:true,
        newProduct
    })
}

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

//Eliminar producto
exports.removeProduct= async (req,res,next)=>{
    //Busca el producto
    const productFound = await product.findById(req.params.id);
    if(!productFound){
        return res.status(404).json({
            success:false,
            message:"No se encontró el producto"
        })
    }
    await productFound.remove();
    res.status(200).json({
        success: true,
        message: "Producto eliminado correctamente."
    })
}

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