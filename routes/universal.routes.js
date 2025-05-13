import {Router} from "express";
import {
    getAgama, getJenisIdentifiers, getJenisKualifikasi, getKodeKlinis, getListDokter,
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
universalRoutes.get('/jenis-kualifikasi',authenticateToken, getJenisKualifikasi)
universalRoutes.get('/dokter', authenticateToken, getListDokter)
universalRoutes.get('/kode-klinis', authenticateToken, getKodeKlinis)

export default universalRoutes;