const  Mongoose  =require( "mongoose");


const comercioSchema= Mongoose.Schema({

    nombre:{type:String,required:true},
    direccion:{type:String,required:true}

})

module.exports= Mongoose.model('Comercio',comercioSchema)