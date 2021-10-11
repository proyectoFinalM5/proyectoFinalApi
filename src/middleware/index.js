import { buscar } from "../services/usuario.js";
import { validacionRole } from "./permisos.js";
import { verifyToken } from "./token.js";

const reviewToken = (token, role = 'auth') => {
    if (!token) return { status: 404, message: 'No token found' }
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
            const status = role === 'refresh' ? 401 : 400;
            return { expired: true, status, message: `Your token ${role} has expired in ${date}` }
        }
        return { status: 400, message }
    }
    return { status: 200, decoded }
}
const reviewRole = (user, params, method, url) => {
    const tag = url.split('/')[1];
    return Boolean(validacionRole(user.rol, tag, method)) || params?.id === user.id;
}
export const middleware = async (req, res, next) => {
    const { url, method, params } = req;
    let tokenRequest = req.header['x-access-token'] || req.headers['authorization'];
    if (tokenRequest?.startsWith("Bearer ")) {
        tokenRequest = tokenRequest.slice(7, tokenRequest.length)
    }
    const path = url.split('/')[1].toLowerCase();
    const token = {
        token: tokenRequest,
        role: path === 'refresh' ? path : 'auth'
    }
    const reviewAuthToken = await reviewToken(token['token'], token['role']);
    const { status, message, decoded } = reviewAuthToken;
    if (status !== 200) return res.status(status).send({ message });
    const { email } = decoded;
    const user = await buscar({ email })
    if (user.length === 0) return res.status(403).send({ message: "User invalid" });
    const role = user[0].rol;
    if (!reviewRole(user, params, method, url)) return res.status(401).send({ message: "su role no permite ejecutar esta acción" })
    req.params.email = email;
    next();
}