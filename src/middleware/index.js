import { buscar } from "../services/usuario.js";
import { validacionRole } from "./permisos.js";
import { verifyToken } from "./token.js";

const reviewToken = (token) => {
    if (!token) return { status: 404, message: 'No se ha encontrado token' }
    const { error, decoded } = verifyToken(token);
    if (error) {
        const { name, message } = error;
        if (name === 'TokenExpiredError') {
            const { expiredAt } = error;
            let date = new Date(expiredAt);
            const options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            };
            date = date.toLocaleDateString("en-US", options);
            return { expired: true, status: 401, message: `Your token has expired in ${date}` }
        }
        return { status: 400, message }
    }
    return { status: 200, decoded }
}
const reviewRole = (user, method, url) => {
    const split = url.split('/');
    console.log(split.length)
    const tag = split[1];
    const param = split.length > 2 ? split[2] : '';
    return Boolean(validacionRole(user.rol, tag, method)) || param == user.id;
}
export const middleware = async (req, res, next) => {
    const { originalUrl, method } = req;
    let tokenRequest = req.header['x-access-token'] || req.headers['authorization'];
    if (tokenRequest?.startsWith("Bearer ")) {
        tokenRequest = tokenRequest.slice(7, tokenRequest.length)
    }
    const { status, message, decoded, expired } = await reviewToken(tokenRequest);
    if (status !== 200) return res.status(status).send(Boolean(expired) ? { message, expired } : { message });
    const { email } = decoded;
    const user = await buscar({ email })
    if (user.length === 0) return res.status(403).send({ message: "Usuario invalido" });
    if (!reviewRole(user[0], method, originalUrl)) return res.status(401).send({ message: "Su role no permite ejecutar esta acción" })
    req.params.email = email;
    next();
}