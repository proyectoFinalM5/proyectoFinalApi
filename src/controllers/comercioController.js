import { parseTelefono } from '../helpers/parser.js'
import service from '../services/comercio.js'

export const listar = async (req, res) => {
    try {
        const comercios = await service.buscar({})
        comercios.map(x => (x.telefono = parseTelefono(x.telefono)))
        return res.json(comercios)
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const findById = async (req, res) => {
    try {
        const comercio = await service.buscar({ _id: req.params.id })
        return res.json({ comercio: comercio || {} })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const search = async (req, res) => {
    const { query } = req;
    const filters = [];
    for (let prop in query) {
        filters.push({ prop, value: query[prop] })
    }
    try {
        const comercios = await service.buscar(filters);
        comercios.map(x => (x.telefono = parseTelefono(x.telefono)))
        return res.json(comercios);
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}
export const registrar = async (req, res) => {
    try {
        const comercio = await service.guardar(req.body)
        return res.json({ comercio });
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const actualizar = async (req, res) => {
    const { params: { id }, body } = req;
    try {
        const comercio = await service.actualizar(id, body)
        return res.json({ comercio })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const eliminar = async (req, res) => {
    try {
        const comercio = await service.eliminar(req.params.id)
        return res.json({ comercio })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export default { listar, findById, search, registrar, actualizar, eliminar }