import Comercio from '../models/comercio.js'
export const listado = async () => {
    try {
        return await Comercio.find()
    } catch (error) {
        throw error;
    }
}

export const findById = async (id) => {
    try {
        return await Comercio.findById(id)
    } catch (error) {
        throw error;
    }
}

export const buscar = async (props, values) => {
    const find = (props instanceof Array) ? props.reduce((x, y) => ({ ...x, [y.prop]: y.value }), {}) : { [props]: values }
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
        return await Comercio.findByIdAndUpdate(id, { "$set": { ...body } })
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
export default { listado, findById, buscar, guardar, actualizar, eliminar }