
import { Schema, model } from 'mongoose'
const usuarioSchema = Schema({
    nombre: { type: String, max: 15, min: 5, required: true },
    apellido:{ type: String, max: 15, min: 5, required: true },
    telefono: { type: Number, max: 8, min:8, require: true },
    email: { type: String, min: 5, max: 100, require: true },
    password: { type: String, max: 15, min: 5, required: true },
    rol: { type: String, min:4, require: true },
})


export default model('Usuario', usuarioSchema)