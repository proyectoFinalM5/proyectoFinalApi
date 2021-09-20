import {Router} from 'express'
import uController from '../controllers/usuarioController.js';

const ruta = Router();
ruta.get("/", uController.listado)
ruta.get("/:id", uController.uno)
ruta.post("/", uController.registrar)
ruta.delete("/:id", uController.eliminar)
ruta.put("/:id", uController.actualizar)
export default ruta