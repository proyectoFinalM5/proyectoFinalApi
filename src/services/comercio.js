import Comercio from '../models/comercio.js'

export const buscar = async (props) => {
    const find = (props instanceof Array) ? props.reduce((x, y) => ({ ...x, [y.prop]: { '$regex': y.value, '$options': 'i' } }), {}) : props
    try {
        return await Comercio.find(find)
    } catch (error) {
        throw error;
    }
}
export const guardar = async (body) => {
    try {
        const comercio = new Comercio({ ...body })
        return await comercio.save()
    } catch (error) {
        throw error;
    }
}
export const actualizar = async (id, body) => {
    try {
        return await Comercio.findByIdAndUpdate(id, { "$set": { ...body } }, { returnOriginal: false })
    } catch (error) {
        throw error;
    }
}
export const eliminar = async (id) => {
    try {
        return await Comercio.findByIdAndDelete(id)
    } catch (error) {
        throw error;
    }
}
export default { buscar, guardar, actualizar, eliminar }