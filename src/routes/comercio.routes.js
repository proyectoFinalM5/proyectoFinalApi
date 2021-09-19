import Router from 'express'
import cController from '../controllers/comercioController.js';

const ruta = Router();
ruta.get("/", cController.listado)
ruta.get("/:id", cController.uno)
ruta.post("/", cController.registrar)
ruta.delete("/:id", cController.eliminar)
ruta.put("/:id", cController.actualizar)
export default ruta