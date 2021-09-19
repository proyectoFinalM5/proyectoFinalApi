import service from '../services/comercio.js'

export const listar = async (req, res) => {
    try {
        const comercios = await service.listado()
        return res.json(comercios)
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export const findById = async (req, res) => {
    try {
        const comercio = await service.findById(req.params.id)
        return res.json({ comercio })
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export const registrar = async (req, res) => {
    try {
        const comercio = await service.guardar(req.body)
        return res.json({ comercio })
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export const actualizar = async (req, res) => {
    const { params: { id }, body } = req;
    try {
        const comercio = await service.actualizar(id, body)
        return res.json({ comercio })
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export const eliminar = async (req, res) => {
    try {
        const comercio = await service.eliminar(req.params.id)
        return res.json({ comercio })
    } catch (error) {
        const message = error?.detail || error;
        return res.status(400).send({ message })
    }
}

export default { listar, findById, registrar, actualizar, eliminar }