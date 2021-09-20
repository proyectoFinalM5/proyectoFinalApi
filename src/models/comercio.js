import mongoose from 'mongoose'
const schema = mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true }
})
export default mongoose.model('Comercio', schema)