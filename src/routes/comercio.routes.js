import { Router } from 'express'
import cController from '../controllers/comercioController.js';
import { middleware } from '../middleware/index.js'
const ruta = Router();

/**
 * GET /comercio
 * @summary listado de comercio
 * @tags Comercio
 * @return {object} 200 - success response
 * @security BearerAuth
 */
ruta.get("/", middleware, cController.listar)

/**
 * GET /comercio/{nombre}
 * @summary listado de comercio
 * @tags Comercio
 * @param {string} nombre.params.required - Nombre comercio
 * @return {object} 200 - success response - application/json
 * @security BearerAuth
 */
ruta.get("/search", middleware, cController.search)

/**
 * GET /comercio/{id}
 * @summary listado de comercio
 * @tags Comercio
 * @param {string} _id.params.required - Id comercio
 * @return {object} 200 - success response - application/json
 * @security BearerAuth
 */
ruta.get("/:id", middleware, cController.findById)

/**
 * POST /comercio
 * @param {comercio} request.body.required - Comercio info
 * @summary Crear comercio
 * @tags Comercio
 * @typedef {object} comercio
 * @property {string} nombre.required - Nombre del comercio
 * @property {string} propietario.required - Propietario del comercio
 * @property {string} location - Localizacion del comercio
 * @property {string} telefono.required - Telefono del comercio
 * @property {string} redes_sociales - Redes sociales del comercio
 * @property {string} categoria.required - Categoria del comercio
 * @property {string} descripcion.required - Descripcion del comercio
 * @property {string} logo.required - Logo del comercio
 * @return {object} 200 - success response -application/json
 * @security BearerAuth
 * @example request - example comercio
 * {
 *   "nombre": "Bury The Light",
 *   "propietario": "Casey Edwards ft. Victor Borba",
 *   "location": "-125.7, 35.5",
 *   "telefono": "77889900",
 *   "redes_sociales": "Redes sociales",
 *   "categoria": "Ropa",
 *   "descripcion":"Venta de ropa",
 *   "logo":"link de imagen"
 * }
 */
ruta.post("/", middleware, cController.registrar)

/**
* DELETE /comercio/{id}
* @summary Eliminar comercio
* @tags Comercio
* @param {string} _id.params.required - Id de comercio
* @return {object} 200 - success response - application/json
* @security BearerAuth
*/
ruta.delete("/:id", middleware, cController.eliminar)

/**
 * PUT /comercio/{id}
 * @param {comercio} request.body.required - Comercio info
 * @summary Actualizar comercio
 * @tags Comercio
 * @typedef {object} comercio
 * @property {string} _id.params.required - ID del comercio
 * @property {string} nombre.required - Nombre del comercio
 * @property {string} propietario.required - Propietario del comercio
 * @property {string} location - Localizacion del comercio
 * @property {string} telefono.required - Telefono del comercio
 * @property {string} redes_sociales - Redes sociales del comercio
 * @property {string} categoria.required - Categoria del comercio
 * @property {string} descripcion.required - Descripcion del comercio
 * @property {string} logo.required - Logo del comercio
 * @return {object} 200 - success response -application/json
 * @security BearerAuth
 * @example request - example comercio
 * {
 *   "_id":"ID",
 *   "nombre": "Bury The Light",
 *   "propietario": "Casey Edwards ft. Victor Borba",
 *   "location": "-125.7, 35.5",
 *   "telefono": "77889966",
 *   "redes_sociales": "Redes sociales",
 *   "categoria": "Ropa",
 *   "descripcion":"Venta de ropa",
 *   "logo":"link de imagen"
 * }
 */
ruta.put("/:id", middleware, cController.actualizar)
export default ruta

