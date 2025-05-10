import { Router } from "express";
import {authenticateToken} from "../middleware/auth.middleware.js";
import {authorizeRole} from "../middleware/authroizeRole.middleware.js";
import {
    akhiriPemeriksaan,
    getAntrian, getAntrianById,
    getAssessmentNote,
    getDokterProfile, getObatList,
    getObjectiveNote, getPasienInfoByRekamMedisId,
    getPlanningNote,
    getRekamMedisById, getRekamMedisByPatientId,
    getResepObat, getRiwayatKunjunganDokter,
    getSubjectiveNote,
    mulaiPemeriksaan,
    updateAssessmentNote,
    updateFotoProfilDokter,
    updateObjectiveNote,
    updatePlanningNote,
    updateResepObat,
    updateSubjectiveNote
} from "../controllers/dokter.controller.js";
import {sendEmailOTPVerif, verifyEmailCode} from "../controllers/verifikasi.controller.js";
import {updateEmailProfile} from "../controllers/pasien.controller.js";

const dokterRoutes = Router();

dokterRoutes.get(
    '/profil',
    authenticateToken,
    authorizeRole('dokter'),
    getDokterProfile
)

dokterRoutes.post(
    '/verifikasi-email',
    authenticateToken,
    authorizeRole('dokter'),
    sendEmailOTPVerif
)
dokterRoutes.post(
    '/verifikasi-kode',
    authenticateToken,
    authorizeRole('dokter'),
    verifyEmailCode
)
dokterRoutes.patch(
    '/profil',
    authenticateToken,
    authorizeRole('dokter'),
    updateEmailProfile
)

dokterRoutes.get(
    '/antrian',
    authenticateToken,
    authorizeRole('dokter'),
    getAntrian
)

dokterRoutes.patch(
    '/update-foto-profil',
    authenticateToken,
    authorizeRole('dokter'),
    updateFotoProfilDokter
)

dokterRoutes.patch(
    '/kunjugan/:id/mulai-pemeriksaan',
    authenticateToken,
    authorizeRole('dokter'),
    mulaiPemeriksaan
)

dokterRoutes.patch(
    '/rekam-medis/:id/subjective',
    authenticateToken,
    authorizeRole('dokter'),
    updateSubjectiveNote
)

dokterRoutes.get(
    '/rekam-medis/:id/subjective',
    authenticateToken,
    authorizeRole('dokter'),
    getSubjectiveNote
)

dokterRoutes.patch(
    '/rekam-medis/:id/objective',
    authenticateToken,
    authorizeRole('dokter'),
    updateObjectiveNote
)

dokterRoutes.get(
    '/rekam-medis/:id/objective',
    authenticateToken,
    authorizeRole('dokter'),
    getObjectiveNote
)

dokterRoutes.patch(
    '/rekam-medis/:id/assessment',
    authenticateToken,
    authorizeRole('dokter'),
    updateAssessmentNote
)

dokterRoutes.get(
    '/rekam-medis/:id/assessment',
    authenticateToken,
    authorizeRole('dokter'),
    getAssessmentNote
)

dokterRoutes.patch(
    '/rekam-medis/:id/planning',
    authenticateToken,
    authorizeRole('dokter'),
    updatePlanningNote
)

dokterRoutes.get(
    '/rekam-medis/:id/planning',
    authenticateToken,
    authorizeRole('dokter'),
    getPlanningNote
)

dokterRoutes.patch(
    '/rekam-medis/:id/resep-obat',
    authenticateToken,
    authorizeRole('dokter'),
    updateResepObat
)

dokterRoutes.get(
    '/rekam-medis/:id/resep-obat',
    authenticateToken,
    authorizeRole('dokter'),
    getResepObat
)

dokterRoutes.patch(
    '/kunjugan/:id/akhiri-pemeriksaan',
    authenticateToken,
    authorizeRole('dokter'),
    akhiriPemeriksaan
)

dokterRoutes.get(
    '/pasien/:id/rekam-medis',
    authenticateToken,
    authorizeRole('dokter'),
    getRekamMedisByPatientId
)

dokterRoutes.get(
    '/rekam-medis/:id',
    authenticateToken,
    authorizeRole('dokter'),
    getRekamMedisById
)

dokterRoutes.get(
    '/riwayat-kunjungan',
    authenticateToken,
    authorizeRole('dokter'),
    getRiwayatKunjunganDokter
)

dokterRoutes.get(
    '/kunjungan/:id',
    authenticateToken,
    authorizeRole('dokter'),
    getAntrianById
)

dokterRoutes.get(
    "/rekam-medis/:id/pasien-info",
    authenticateToken,
    authorizeRole('dokter'),
    getPasienInfoByRekamMedisId
)

dokterRoutes.get(
    "/obat",
    authenticateToken,
    authorizeRole('dokter'),
    getObatList
)


export default dokterRoutes;