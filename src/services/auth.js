import { isPasswordValid } from '../helpers/bcrypt.js';
import { newToken } from '../middleware/token.js'
import { buscar } from './usuario.js';

export const login = async (email, password) => {
    try {
        const usuario = await buscar({ email });
        const found = usuario.length > 0;
        const user = found ? usuario.pop() : {}
        const valid = await isPasswordValid(password, found ? user.password : '');
        return { valid, found, user, token: newToken(user.email) };
    } catch (error) {
        throw error;
    }
}

export const refresh = async (email) => {
    try {
        const usuario = await buscar({ email });
        const found = usuario.length > 0;
        const user = found ? usuario.pop() : {}
        return { found, user, token: newToken(user.email) };
    } catch (error) {
        throw error;
    }
}

export default { login, refresh }