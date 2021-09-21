import { Router } from 'express'
import { login, refresh } from '../controllers/authController.js';
import { middleware } from '../middleware/index.js'

const ruta = Router();
ruta.post("/login", login)
ruta.get("/refresh", middleware, refresh)
export default ruta;