import { Router } from 'express'
import uController from '../controllers/usuarioController.js';
import { middleware } from '../middleware/index.js'
import mongoose from 'mongoose';

const ruta = Router();
ruta.get("/", uController.listar)

/**
 * GET /usuario/{id}
 * @summary listado de comercio
 * @param {string} _id.params.required - Id comercio
 * @return {object} 200 - success response - application/json
 */
ruta.get("/:id", uController.findById)
ruta.post("/", middleware, uController.registrar)
ruta.delete("/:id", middleware, uController.eliminar)
ruta.put("/:id", middleware, uController.actualizar)
export default ruta;