import { Schema, model } from 'mongoose'
const comercioSchema = Schema({
    nombre_comercio: { type: String, max: 15, min: 5, required: true },
    nombre_dueño: { type: String, max: 15, min: 5, required: true },
    //localizacion: { type: location, require: true },
    localizacion: { type: location, coordinates: [ x, y ] },
    telefono: { type: Number, max: 8, min:8, require: true },
    redes_sociales: {type: String, min:8 },
    categoria: { type: String, min:4, require: true },
    descripcion: { type: String, min: 5, max: 100, require: true },
    logo: { type: String, min: 5, require: true }
})

const regex = {
    email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    //eslint-disable-next-line
    password: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
    upperCase: /[A-Z]/,
    lowerCase: /[a-z]/
}

export default model('Comercio', comercioSchema)