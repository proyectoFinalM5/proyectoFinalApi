import service from '../services/usuario.js'

export const listar = async (req, res) => {
    try {
        const usuarios = await service.listado()
        return res.json(usuarios)
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export const findById = async (req, res) => {
    try {
        const usuario = await service.findById(req.params.id)
        return res.json({ usuario })
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export const registrar = async (req, res) => {
    try {
        const usuario = await service.guardar(req.body)
        return res.json({ usuario })
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export const actualizar = async (req, res) => {
    const { params: { id }, body } = req;
    try {
        const usuario = await service.actualizar(id, body)
        return res.json({ usuario })
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export const eliminar = async (req, res) => {
    try {
        const usuario = await service.eliminar(req.params.id)
        return res.json({ usuario })
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export default { listar, findById, registrar, actualizar, eliminar }