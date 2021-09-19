import { Schema, model } from 'mongoose'
const schema = Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true }
})
export default model('Comercio', schema)