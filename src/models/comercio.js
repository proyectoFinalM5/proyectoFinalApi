import { Schema, model } from 'mongoose'
const schema = Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true }
})


const comercioSchema = Mongoose.Schema({
    nombre:{type:String,require:true},
    nombreDueño:{type:String,requiere:true},
    direccion:{type:String,require:true},
    //telefono:
    facebook: {type:String,require:true},
    categoria: {type:String,require:true},
    //email: 
    logo: 
})

const regex = {
    email: ^[a-zA-Z0-8.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
    telefono: ^[+]*[0-9\s]{1,3}[0-9\s]+$
    contraseña: ^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$
    logo: <div id="imgTagWrapperId"[\s\S+]+src="([\s\S+]+?jpg)"
}


const usuarioSchema = Mongoose.Schema({
    nombre:{type:String,require:true},
    direccion:
    //telefono:
    //email:
    usuario:
    //contraseña: 
})

















export default model('Comercio', schema)