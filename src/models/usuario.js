import mongoose from 'mongoose'
import { regex } from '../helpers/regex.js'
const usuarioSchema = mongoose.Schema({
    nombre: { type: String, max: 15, min: 5, required: true },
    apellido: { type: String, max: 15, min: 5, required: true },
    telefono: { type: String, max: 8, min: 8, require: true },
    email: { type: String, min: 5, max: 100, validate: regex.email, unique: true, require: true },
    password: { type: String, required: true },
    rol: { type: Number, require: true, default: 3 },
})

export default mongoose.model('Usuario', usuarioSchema)