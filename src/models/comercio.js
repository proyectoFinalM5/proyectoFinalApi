import mongoose from 'mongoose'

const comercioSchema = mongoose.Schema({
    nombre_comercio: { type: String, max: 15, min: 5, required: true },
    nombre_dueño: { type: String, max: 15, min: 5, required: true },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
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