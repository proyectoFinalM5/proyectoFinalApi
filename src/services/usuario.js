import { hashPassword, isPasswordValid } from '../helpers/bcrypt.js';
import { newToken } from '../middleware/token.js'
import Usuario from '../models/usuario.js'

export const login = async (email, password) => {
    try {
        const usuario = await (await buscar({ email }));
        const found = usuario.length > 0;
        const valid = await isPasswordValid(password, found ? usuario[0].password : '');
        return { valid, found, usuario, token: newToken(usuario._id) };
    } catch (error) {
        throw error;
    }
}

export const buscar = async (props) => {
    const find = {};
    for (const prop in props) {
        find[prop] = prop == "_id" ? props[prop] : ({ '$regex': props[prop], '$options': 'i' })
    }
    try {
        return await Usuario.find(find)
    } catch (error) {
        throw error;
    }
}
export const guardar = async (body) => {
    try {
        const usuario = new Usuario({ ...body, password: hashPassword(body.password) })
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
export default { login, buscar, guardar, actualizar, eliminar }