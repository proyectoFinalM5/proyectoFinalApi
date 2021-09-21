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
    let { id } = req.params;
    if (id instanceof String) { id = mongoose.Types.ObjectId(id); }
    try {
        const comercio = await service.buscar({ _id:id })
        return res.json({ comercio: comercio || {} })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const search = async (req, res) => {
    try {
        const comercios = await service.buscar(req.query);
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
    let { params: { id }, body } = req;
    if (id instanceof String) { id = mongoose.Types.ObjectId(id); }
    try {
        const comercio = await service.actualizar(id, body)
        return res.json({ comercio })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export const eliminar = async (req, res) => {
    let { id } = req.params;
    if (id instanceof String) { id = mongoose.Types.ObjectId(id); }
    try {
        const comercio = await service.eliminar(id)
        return res.json({ comercio })
    } catch (error) {
        const message = error?.message || error;
        return res.status(400).send({ message })
    }
}

export default { listar, findById, search, registrar, actualizar, eliminar }