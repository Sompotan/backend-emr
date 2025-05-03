import {Router} from "express";
import {
    getAgama, getJenisIdentifiers, getListDokter,
    getPendidikan,
    getStatusPembiayaan,
    getStatusPerkawinan
} from "../controllers/universal.controller.js";
import {authenticateToken} from "../middleware/auth.middleware.js";

const universalRoutes = Router()

universalRoutes.get('/agama',authenticateToken , getAgama)
universalRoutes.get('/pendidikan',authenticateToken, getPendidikan)
universalRoutes.get('/status-perkawinan',authenticateToken, getStatusPerkawinan)
universalRoutes.get('/status-pembiayaan',authenticateToken, getStatusPembiayaan)
universalRoutes.get('/jenis-identifiers',authenticateToken, getJenisIdentifiers)
universalRoutes.get('/dokter', authenticateToken, getListDokter)

export default universalRoutes;