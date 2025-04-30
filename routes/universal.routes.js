import {Router} from "express";
import {
    getAgama, getJenisIdentifiers,
    getPendidikan,
    getStatusPembiayaan,
    getStatusPerkawinan
} from "../controllers/universal.controller.js";

const universalRoutes = Router()

universalRoutes.get('/agama', getAgama)
universalRoutes.get('/pendidikan', getPendidikan)
universalRoutes.get('/status-perkawinan', getStatusPerkawinan)
universalRoutes.get('/status-pembiayaan', getStatusPembiayaan)
universalRoutes.get('/jenis-identifiers', getJenisIdentifiers)

export default universalRoutes;