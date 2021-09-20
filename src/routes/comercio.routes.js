import { Router } from 'express'
import cController from '../controllers/comercioController.js';

const ruta = Router();
ruta.get("/", cController.listar)
ruta.get("/:id", cController.findById)
ruta.post("/", cController.registrar)
ruta.delete("/:id", cController.eliminar)
ruta.put("/:id", cController.actualizar)
export default ruta