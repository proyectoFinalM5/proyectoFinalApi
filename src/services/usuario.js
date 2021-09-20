import Usuario from '../models/usuario.js'
export const listado = async () => {
    try {
        return await Usuario.find()
    } catch (error) {
        throw error;
    }
}

export const findById = async (id) => {
    try {
        return await Usuario.findById(id)
    } catch (error) {
        throw error;
    }
}

export const buscar = async (props, values) => {
    const find = (props instanceof Array) ? props.reduce((x, y) => ({ ...x, [y.prop]: y.value }), {}) : { [props]: values }
    try {
        return await Usuario.find(find)
    } catch (error) {
        throw error;
    }
}
export const guardar = async (body) => {
    try {
        const usuario = new Comercio({ ...body })
        return await usuario.save()
    } catch (error) {
        throw error;
    }
}
export const actualizar = async (id, body) => {
    try {
        return await Usuario.findByIdAndUpdate(id, { "$set": { ...body } })
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
export default { listado, findById, buscar, guardar, actualizar, eliminar }