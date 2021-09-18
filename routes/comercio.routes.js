const Router =require( "express")
const cController =require( "../controllers/comercioController.js")
const ruta = Router();
//todos
ruta.get("/listadoComercios",cController.listado)
//uno
ruta.get("/uno/:id",cController.uno)

ruta.post("/registrar",cController.registrar)

ruta.delete("/eliminarComercio/:id",cController.eliminar)

ruta.put("/editarComercio/:id",cController.actualizar)

module.exports=ruta