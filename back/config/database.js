const mongoose=require("mongoose");

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con =>{
        console.log(`Base de datos conectada con el servidor: ${con.connection.host}`);
    }).catch(con=>{
        console.log(`No se logró la conexión con la base de datos.`)
    })
}

module.exports=connectDatabase;