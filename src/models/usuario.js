
import { Schema, model } from 'mongoose'
const usuarioSchema = Schema({
    nombre_usuario: { type: String, max: 15, min: 5, required: true },
    telefono: { type: Number, max: 8, min:8, require: true },
    rol: { type: String, min:4, require: true },
})


export default model('Usuario', usuarioSchema)