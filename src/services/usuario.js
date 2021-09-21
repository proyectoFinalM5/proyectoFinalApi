import service from '../services/usuario.js'

export const listar = async (req, res) => {
    try {
        const usuarios = await service.buscar({})
        return res.json(usuarios)
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const findById = async (req, res) => {
    try {
        const usuario = await service.buscar({ _id: req.params.id })
        return res.json({ usuario: usuario || {} })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const search = async (req, res) => {
    try {
        const usuarios = await service.buscar(req.query);
        return res.json(usuarios);
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}
export const registrar = async (req, res) => {
    try {
        const usuario = await service.guardar(req.body)
        return res.json({ usuario });
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
        const usuario = await service.eliminar(req.params?.id)
        return res.json({ usuario })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export default { listar, findById, search, registrar, actualizar, eliminar }