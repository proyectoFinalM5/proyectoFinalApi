import { Router } from 'express'
import { login, validador } from '../controllers/authController.js';

const ruta = Router();
ruta.post("/login", login)
/**
 * GET /validar
 * @summary validar campos
 * @param {string} email.query - Email
 * @param {string} password.query - Password
 * @return {object} 200 - success response - application/json
 */
ruta.get("/validar", validador)
export default ruta;