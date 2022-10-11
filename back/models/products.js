const mongoose = require("mongoose")

const productsSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true, "Por favor registre el nombre del producto."],
        trim:true,
        maxLength:[120, "El nombre del producto no debe exceder los 120 caracteres."]
    }, 
    price:{
        type:Number, 
        required:[true, "Por favor registre el precio del producto."],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default:0.0
    },
    description:{
        type:String, 
        required:[true, "Registre una descripción para el producto."],
    },
    score:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String, 
                required: true,   
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String, 
        required:[true, "Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Mujer",
                "Hombre",
                "Bebé",
                "Niños",
                "Ofertas",
                "Accesorios"
            ]
        }
    },
    seller:{
        type:String,
        required:[true, "Po favor registre el vendedor de productos"]
    },
    stock:{
        type:Number, 
        required:[true, "Por favor registre el stock del producto."],
        maxLength:[5, "Cantidad máxima del producto, no puede sobrepasar 99999"],
        default:0
    },
    numGrades:{
        type:Number,
        default:0
    },
    reviews:[
        {
            customerName:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String, 
                required:true
            },
            reviewDate:{
                type:Date,
                default: Date.now
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("products", productsSchema)