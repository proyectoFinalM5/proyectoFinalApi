import { Router } from 'express'
import { login, refresh, validador } from '../controllers/authController.js';
import { middleware } from '../middleware/index.js'

const ruta = Router();
ruta.post("/login", login)
ruta.get("/refresh", middleware, refresh)
/**
 * GET /validar
 * @summary validar campos
 * @param {string} email.query - Email
 * @param {string} password.query - Password
 * @return {object} 200 - success response - application/json
 */
ruta.get("/validar", validador)
export default ruta;