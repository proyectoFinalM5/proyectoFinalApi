import { Router } from 'express'
import cController from '../controllers/comercioController.js';
import { middleware } from '../middleware/index.js'
const ruta = Router();

/**
 * GET /comercio
 * @summary listado de comercio
 * @return {object} 200 - success response
 */
ruta.get("/", middleware, cController.listar)
ruta.get("/search", middleware, cController.search)
ruta.get("/:id", middleware, cController.findById)
ruta.post("/", middleware, cController.registrar)
ruta.delete("/:id", middleware, cController.eliminar)
ruta.put("/:id", middleware, cController.actualizar)
export default ruta