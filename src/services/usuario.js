import Usuario from '../models/usuario.js'

export const buscar = async (props) => {
    const find = {};
    for (const prop in props) {
        find[prop] = ({ '$regex': props[prop], '$options': 'i' })
    }
    try {
        return await Usuario.find(find)
    } catch (error) {
        throw error;
    }
}
export const guardar = async (body) => {
    try {
        const usuario = new Usuario({ ...body })
        return await usuario.save()
    } catch (error) {
        throw error;
    }
}
export const actualizar = async (id, body) => {
    try {
        return await Usuario.findByIdAndUpdate(id, { "$set": { ...body } }, { returnOriginal: false })
    } catch (error) {
        throw error;
    }
}
export const eliminar = async (id) => {
    try {
        return await Usuario.findByIdAndDelete(id)
    } catch (error) {
        throw error;
    }
}
export default { buscar, guardar, actualizar, eliminar }