const  Mongoose  =require("mongoose");

Mongoose
//.connect("mongodb://localhost/emprendeapp")
.connect("mongodb+srv://javi:1234@comercios.yd3gh.mongodb.net/emprendeapp?retryWrites=true&w=majority")
.then((db)=>console.log("Ya en linea XD"))
.catch((err)=>console.log("No se conecta :("));


module.exports= Mongoose