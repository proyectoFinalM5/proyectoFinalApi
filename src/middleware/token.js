import jwt from 'jsonwebtoken';

export const newToken = email => {
    const auth = jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: '12h' });
    const { decoded: { exp } } = verifyToken(auth);
    return {
        token: auth,
        expIn: exp

    }
}
export const verifyToken = token => {
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        return { error: null, decoded }
    } catch (error) {
        return { error, decoded: null }
    }
}