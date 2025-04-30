import { Router } from 'express';
import {register, login, oauthSync, logout} from '../controllers/auth.controllers.js';
import {authenticateToken} from "../middleware/auth.middleware.js";

const authRoutes = Router();

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.post('/oauth-sync', oauthSync)
authRoutes.post('/logout', authenticateToken, logout)


export default authRoutes;