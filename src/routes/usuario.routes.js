import { Router } from 'express'
import uController from '../controllers/usuarioController.js';
import { middleware } from '../middleware/index.js'

const ruta = Router();
ruta.get("/", uController.listar)
ruta.get("/:id", uController.findById)
ruta.post("/", middleware, uController.registrar)
ruta.delete("/:id", middleware, uController.eliminar)
ruta.put("/:id", middleware, uController.actualizar)
export default ruta;