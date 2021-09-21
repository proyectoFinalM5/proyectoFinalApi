import { Router } from 'express'
import uController from '../controllers/usuarioController.js';
import { middleware } from '../middleware/index.js'

const ruta = Router();

/**
 * GET /usuario 
 * @summary listado de usuarios
 * @tags Usuario
 * @return {object} 200 - success response
 */
ruta.get("/", uController.listar)

/**
 * GET /usuario/{id}
 * @summary listado de comercio
 * @param {string} _id.params.required - Id comercio
 * @return {object} 200 - success response - application/json
 */
ruta.get("/:id", uController.findById)

/**
 * POST /usuario
 * @param {usuario} request.body.required - Usuario info
 * @summary Crear usuario
 * @tags Usuario
 * @typedef {object} usuario
 * @property {string} nombre.required - Nombre del usuario
 * @property {string} apellido.required - Apellido del usuario
 * @property {string} telefono.required - Telefono del usuario
 * @property {string} email.required - Email del usuario
 * @property {string} password.required - Contrase;a del usuario
 * @property {string} rol.required - Rol del usuario
 * @return {object} 200 - success response -application/json
 * @example request - example usuario
 * {
 *   "nombre": "Byron Alexander",
 *   "apellido": "Ramirez Beltran",
 *   "telefono": "87654321",
 *   "email": "byron34@gmail.com",
 *   "password": "87345261",
 *   "rol":"1"
 * }
 */
ruta.post("/", middleware, uController.registrar)

/**
 * DELETE /usuario/{id}
 * @summary Eliminar usuario
 * @tags Usuario
 * @param {string} _id.params.required - Id usuario
 * @return {object} 200 - success response - application/json
 */
ruta.delete("/:id", middleware, uController.eliminar)

/**
 * PUT /usuario/{id}
 * @param {usuario} request.body.required - Usuario info
 * @summary Actualizar usuario
 * @tags Usuario
 * @typedef {object} usuario
 * @property {string} nombre.required - Nombre del usuario
 * @property {string} apellido.required - Apellido del usuario
 * @property {string} telefono.required - Telefono del usuario
 * @property {string} email.required - Email del usuario
 * @property {string} password.required - Contrase;a del usuario
 * @property {string} rol.required - Rol del usuario
 * @return {object} 200 - success response -application/json
 * @example request - example usuario
 * {
 *   "nombre": "Byron Alexander",
 *   "apellido": "Ramirez Beltran",
 *   "telefono": "87654321",
 *   "email": "byron34@gmail.com",
 *   "password": "87345261",
 *   "rol":"1"
 * }
 */
ruta.put("/:id", middleware, uController.actualizar)
export default ruta;