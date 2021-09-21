import { Router } from 'express'
import cController from '../controllers/comercioController.js';

const ruta = Router();

/**
 * GET /comercio
 * @summary listado de comercio
 * @return {object} 200 - success response
 */
ruta.get("/", cController.listar)
ruta.get("/search", cController.search)
ruta.get("/:id", cController.findById)
ruta.post("/", cController.registrar)
ruta.delete("/:id", cController.eliminar)
ruta.put("/:id", cController.actualizar)
export default ruta