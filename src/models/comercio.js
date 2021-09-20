import mongoose from 'mongoose'

const comercioSchema = mongoose.Schema({
    nombre: { type: String, max: 15, min: 5, required: true },
    propietario: { type: String, max: 15, min: 5, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    telefono: { type: Number, max: 8, min:8, require: true },
    redes_sociales: {type: String, min:8 },
    categoria: { type: String, min:4, require: true },
    descripcion: { type: String, min: 5, max: 100, require: true },
    logo: { type: String, min: 5, require: true }
})

export default mongoose.model('Comercio', comercioSchema)
