import { Router } from 'express'
import uController from '../controllers/usuarioController.js';

const ruta = Router();
ruta.get("/", uController.listar)
ruta.get("/:id", uController.findById)
ruta.post("/", uController.registrar)
ruta.delete("/:id", uController.eliminar)
ruta.put("/:id", uController.actualizar)
export default ruta;