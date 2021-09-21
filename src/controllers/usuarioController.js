import regex from '../helpers/regex.js';
import service from '../services/usuario.js'
import mongoose from 'mongoose'

export const listar = async (req, res) => {
    try {
        const usuarios = await service.buscar({});
        return res.json(usuarios);
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const findById = async (req, res) => {
    let { _id } = req.params;
    if (_id instanceof String) { _id = mongoose.Types.ObjectId(_id); }
    try {
        const usuario = await service.buscar({ _id })
        return res.json({ usuario })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const registrar = async (req, res) => {
    const { password } = req.body;
    try {
        if (!regex.password.test(password)) {
            return res.status(400)
                .send({ message: "The password required lowercase, uppercase and special character" })
        }
        const usuario = await service.guardar(req.body)
        return res.json({ usuario })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const actualizar = async (req, res) => {
    const { params: { id }, body } = req;
    try {
        const usuario = await service.actualizar(id, body)
        return res.json({ usuario })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const eliminar = async (req, res) => {
    try {
        const usuario = await service.eliminar(req.params.id)
        return res.json({ usuario })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export default { listar, findById, registrar, actualizar, eliminar }