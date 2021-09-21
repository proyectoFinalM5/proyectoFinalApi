import service from '../services/auth.js'
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { found, token, usuario, valid } = await service.login(email, password);
        if (!found) return res.status(400).send({ message: `The user with email ${email} not found` });
        if (!valid) return res.status(400).send({ message: "Invalid password" });
        return res.json({ usuario, token })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const refresh = async (req, res) => {
    const { email } = req.params;
    try {
        const { found, token, usuario } = await service.refresh(email);
        if (!found) return res.status(400).send({ message: `The user with email ${email} not found` });
        return res.json({ usuario, token })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}
