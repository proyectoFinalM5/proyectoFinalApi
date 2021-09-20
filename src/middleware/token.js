import jwt from 'jsonwebtoken';

export const newToken = userId => {
    const types = {
        auth: {
            title: 'auth',
            expiresIn: '3h',
        }, refresh: {
            title: 'refresh',
            expiresIn: '6h',
        }
    }
    const PAYLOAD = type => ({ role: type.title, userId });
    const OPTIONS = expiresIn => ({ expiresIn: expiresIn });
    const auth = jwt.sign(PAYLOAD(types.auth), process.env.TOKEN_SECRET, OPTIONS(types.auth.expiresIn));
    const refresh = jwt.sign(PAYLOAD(types.refresh), process.env.TOKEN_SECRET, OPTIONS(types.refresh.expiresIn));
    return { auth, refresh }
}
export const verifyToken = token => {
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        return { error: null, decoded }
    } catch (error) {
        return { error, decoded: null }
    }
}