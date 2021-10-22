import regex from '../helpers/regex.js';
import service from '../services/auth.js'
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { found, token, user, valid } = await service.login(email, password);
        if (!found) return res.status(400).send({ message: `The user with email ${email} not found` });
        if (!valid) return res.status(400).send({ message: "Invalid password" });
        return res.send({ token, user })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const validador = (req, res) => {
    const { email, password } = req.query;
    const test = (prop, value) => {
        const test = regex[prop].test(value);
        const res = { test };
        !test && (res['message'] = `${prop} invalido`);
        (prop === "password" && !test) && (res['requisitos'] = ['Tener mayusculas', "Tener minisculas", "Minimo 8 digitos", "Un caracter especial"]);
        return res;
    }
    if (Boolean(email) || Boolean(password)) {
        const response = {};
        email && (response['email'] = test('email', email));
        password && (response['password'] = test('password', password));
        return res.json(response);
    } else {
        return res.status(400).send({ message: "no ha enviado nigun dato a validar" })
    }
}