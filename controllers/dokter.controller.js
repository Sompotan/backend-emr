import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


export const getDokterProfile = async (req, res) => {
    const userId = req.user.userId;

    try {
        const dokter = await prisma.tenagaMedis.findUnique({
            where: { userId },
            include: {
                user: {
                    select: {email: true}
                },
                nama: true,
                alamat: true,
                identifier: {
                    include: { jenisIdentifier: true }
                },
                kualifikasi: {
                    include: { jenisKualifikasi: true }
                }

            }
        });

        if(!dokter) {
            return res.status(404).json({
                error: "Profil dokter tidak ditemukan"
            })
        }

        const response = {
            id: dokter.id,
            email: dokter.user?.email,
            nama_lengkap: dokter.nama?.namaLengkap,
            gender: dokter.gender,
            tanggal_lahir: dokter.tanggalLahir,
            nomor_handphone: dokter.nomorHandphone,
            alamat: dokter.alamat,
            identifier: dokter.identifier.map(i => ({
                jenis: i.jenisIdentifier?.namaJenisIdentifier,
                nilai: i.nilaiIdentifier
            })),
            kualifikasi: dokter.kualifikasi.map(k => ({
                jenis: k.jenisKualifikasi?.namaJenisKualifikasi,
                nomor: k.nomorKualifikasi,
                tanggal_mulai: k.tanggalMulai,
                tanggal_berakhir: k.tanggalBerakhir,
                institusi_penerbit: k.institusiPenerbit
            }))
        };

        res.status(200).json(response);

    } catch (error) {
        console.error("[ERROR getDokterProfile", error);
        res.status(500).json({ error: "Gagal mengambil profil dokter"})
    }
}

export const getAntrian = async (req, res) => {
    const userId = req.user.userId;

    try {
        const dokter = await prisma.tenagaMedis.findUnique({
            where: { userId }
        });

        if (!dokter) {
            return res.status(404).json({ error: "Data dokter tidak ditemukan" });
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const antrian = await prisma.kunjungan.findMany({
            where: {
                tenagaMedisId: dokter.id,
                tanggal_kunjungan: {
                    gte: today,
                    lt: tomorrow
                }
            },
            orderBy: {
                checkInAt: "asc"
            },
            include: {
                pasien: {
                    select: {
                        namaLengkap: true,
                        tanggalLahir: true,
                        nomorHandphone: true
                    }
                }
            }
        });

        const hasil = antrian.map(k => ({
            id: k.id,
            nama_pasien: k.pasien.namaLengkap,
            tanggal_lahir: k.pasien.tanggalLahir,
            nomor_handphone: k.pasien.nomorHandphone,
            alasan_kunjungan: k.alasanKunjungan,
            status: k.status,
            checkInAt: k.checkInAt
        }));

        return res.status(200).json(hasil);
    } catch (error) {
        console.error("[ERROR getAntrianDokter]", error);
        return res.status(500).json({ error: "Gagal mengambil antrian kunjungan" });
    }
};

export const updateFotoProfilDokter = async(req, res) => {
    const  userId  = req.user.userId;
    const { fotoProfil } = req.body;

    try {

        const dokter = await prisma.tenagaMedis.update({
            where: { userId },
            data: {
                ...(fotoProfil !== undefined && { fotoProfil })
            }
        });

        return res.status(200).json({
            message: "Foto profil berhasil diperbarui",
            fotoProfil: dokter.fotoProfil
        })

    } catch (error) {
        console.error("[ERROR updateFotoProfilPasien]", error);
        return res.status(500).json({
            error: "Gagal memperbarui foto profil"
        })
    }

}

export const mulaiPemeriksaan = async(req, res) => {
    const {
        id: kunjunganId
    } = req.params;

    const userId = req.user.userId;

    try {

        const dokter = await prisma.tenagaMedis.findUnique({
            where: {
                userId
            }
        });


        if(!dokter) {
            return res.status(404).json({
                error: "Data dokter tidak ditemukan"
            })
        }

        const kunjungan = await prisma.kunjungan.findUnique({
            where: {
                id: kunjunganId
            },
            select: {
                endAt: true
            }
        });

        if (!kunjungan) {
            return res.status(404).json({
                error: "Kunjungan tidak ditemukan"
            })
        }


        const existingUtama = await prisma.rekamMedis.findFirst({
            where: {
                kunjunganId,
                versi : "UTAMA"
            }
        });

        let versi = "UTAMA";

        if(existingUtama && existingUtama.status === "FINAL") {
            versi = "FOLLOW_UP"
        }

        if(existingUtama && existingUtama.status !== "FINAL") {
            return res.status(400).json({
                error: "Kunjungan belum selesai. Tidak dapat membuat rekam medis baru"
            })
        }

        const rekamMedis = await prisma.rekamMedis.create({
            data: {
                kunjunganId,
                tenagaMedisId: dokter.id,
                tanggal: new Date(),
                status: "DRAFT",
                versi
            }
        })

        await prisma.kunjungan.update({
            where: {
                id: kunjunganId,
            },
            data: {
                status: "DalamPemeriksaan",
                startAt: new Date()
            }
        })

        return res.status(200).json({
            message: "Pemeriksaan Dimulai",
            data: rekamMedis
        })
    } catch (error) {
        console.error("[ERROR mulaiPemeriksaan", error);
        return res.status(500).json({
            error: "Gagal memulai pemeriksaan"
        })
    }
}

export const updateSubjectiveNote = async(req, res) => {
    const {
        id: rekamMedisId
    } = req.params;

    const {
        keluhanPasien,
        riwayatPenyakit,
        alergiPasien,
        obatDikonsumsi
    } = req.body;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: {
                id: rekamMedisId,
            },
            include: {
                subjectiveNote: true
            }
        });

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam Medis tidak ditemukan"
            })
        }

        if (rekamMedis.status !== "DRAFT") {
            return res.status(400).json({
                error: "Rekam medis sudah final. Tidak bisa diubah"
            })
        }

        let subjectiveNoteId = rekamMedis.subjectiveNote?.id;

        if (!subjectiveNoteId) {
            const newNote = await prisma.subjectiveNote.create({
                data: {
                    rekamMedisId
                }
            });
            subjectiveNoteId = newNote.id
        } else {
            await prisma.keluhanPasien.deleteMany({
                where: { subjectiveNoteId }
            })
            await prisma.riwayatPenyakit.deleteMany({
                where: { subjectiveNoteId }
            })
            await prisma.alergiPasien.deleteMany({
                where: { subjectiveNoteId }
            })
            await prisma.obatDikonsumsi.deleteMany({
                where: { subjectiveNoteId }
            })
        }

        if (keluhanPasien?.length > 0) {
            await prisma.keluhanPasien.createMany({
                data: keluhanPasien.map(k => ({ ...k, subjectiveNoteId }))
            })
        }

        if (riwayatPenyakit?.length > 0) {
            await prisma.riwayatPenyakit.createMany({
                data: riwayatPenyakit.map(j => ({ ...j, subjectiveNoteId }))
            })
        }

        if (alergiPasien?.length > 0) {
            await prisma.alergiPasien.createMany({
                data: alergiPasien.map(i => ({ ...i, subjectiveNoteId }))
            })
        }

        if (obatDikonsumsi?.length > 0) {
            await prisma.obatDikonsumsi.createMany({
                data: obatDikonsumsi.map(l => ({ ...l, subjectiveNoteId }))
            })
        }

        return res.status(200).json({
            message: "Subjective note berhasil disimpan",
            data: subjectiveNoteId
        })


    } catch (error) {
        console.error("[ERROR updateSubjectiveNote]", error);
        return res.status(500).json({
            error: "Gagal menyimpan subjective note"
        })
    }
}

export const getSubjectiveNote = async(req, res) => {
    const {
        id: rekamMedisId
    } = req.params;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: { id: rekamMedisId },
            include: {
                subjectiveNote: {
                    include: {
                        keluhanPasien: true,
                        riwayatPenyakit: true,
                        alergiPasien: true,
                        obatDikonsumsi: true,
                    }
                }
            }
        })

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam Medis tidak ditemukan"
            })
        }

        if (!rekamMedis.subjectiveNote) {
            return res.status(200).json({
                message: "Belum ada subjective notes",
                keluhanPasien: [],
                riwayatPenyakit: [],
                alergiPasien: [],
                obatDikonsumsi: []
            })
        }

        const {
            keluhanPasien,
            riwayatPenyakit,
            alergiPasien,
            obatDikonsumsi
        } = rekamMedis.subjectiveNote

        return res.status(200).json({
            keluhanPasien,
            riwayatPenyakit,
            alergiPasien,
            obatDikonsumsi
        });

    } catch (error) {
        console.error("[ERROR getSubjectiveNote]", error);
        return res.status(500).json({
            error: "Gagal mengambil subjective note"
        })
    }

}

export const updateObjectiveNote = async(req, res) => {
    const {
        id: rekamMedisId
    } = req.params;

    const {
        pemeriksaanUmum,
        tandaVital,
        antropometri,
        statusGeneralis,
        pemeriksaanPenunjang
    } = req.body;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: { id: rekamMedisId },
            include: {
                objectiveNote: true
            }
        })

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam Medis tidak ditemukan"
            })
        }

        if (rekamMedis.status === "FINAL") {
            return res.status(400).json({
                error: "Rekam Medis sudah final, tidak bisa diubah"
            })
        }

        let objectiveNoteId;

        if (!rekamMedis.objectiveNote) {
            const created = await prisma.objectiveNote.create({
                data: {
                    rekamMedisId,
                    pemeriksaanPenunjang
                }
            });
            objectiveNoteId = created.id;
        } else {
            objectiveNoteId = rekamMedis.objectiveNote.id

            await prisma.objectiveNote.update({
                where: { id: objectiveNoteId },
                data: { pemeriksaanPenunjang }
            })

            await prisma.pemeriksaanUmum.deleteMany({
                where: {
                    objectiveNoteId
                }
            })

            await prisma.tandaVital.deleteMany({
                where: {
                    objectiveNoteId
                }
            })

            await prisma.antropometri.deleteMany({
                where: {
                    objectiveNoteId
                }
            })

            await prisma.statusGeneralis.deleteMany({
                where: {
                    objectiveNoteId
                }
            })
        }

        if (pemeriksaanUmum) {
            const { gcsEye = 0, gcsVerbal = 0, gcsMotor = 0, ...rest } = pemeriksaanUmum;
            const gcsTotal = gcsEye + gcsVerbal + gcsMotor;


            await prisma.pemeriksaanUmum.create({
                data: {
                    ...rest,
                    gcsEye,
                    gcsMotor,
                    gcsVerbal,
                    gcsTotal,
                    objectiveNoteId
                }
            })
        }

        if (tandaVital) {
            await prisma.tandaVital.create({
                data: {
                    ...tandaVital,
                    objectiveNoteId
                }
            })
        }

        if (antropometri) {
            await prisma.antropometri.create({
                data: {
                    ...antropometri,
                    objectiveNoteId
                }
            })
        }

        if (statusGeneralis) {
            await prisma.statusGeneralis.create({
                data: {
                    ...statusGeneralis,
                    objectiveNoteId
                }
            })
        }

        return res.status(200).json({
            message: "Objective Note berhasil disimpan"
        })

    } catch (error) {
        console.error("[ERROR updateObjectiveNote]", error);
        return res.status(500).json({
            error: "Gagal menyimpan objective note"
        })
    }
}

export const getObjectiveNote = async(req, res) => {
    const {
        id: rekamMedisId
    } = req.params;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: { id: rekamMedisId },
            include: {
                objectiveNote:  {
                    include: {
                        pemeriksaanUmum: true,
                        tandaVital: true,
                        antropometri: true,
                        statusGeneralis: true,
                    }
                }
            }
        })

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam Medis tidak ditemukan"
            })
        }

        if (!rekamMedis.objectiveNote) {
            return res.status(200).json({
                message: "Belum ada objective notes",
                pemeriksaanUmum: null,
                tandaVital: null,
                antropometri: null,
                statusGeneralis: null,
                pemeriksaanPenunjang: ""
            });
        }

        const {
            pemeriksaanUmum,
            tandaVital,
            antropometri,
            statusGeneralis,
            pemeriksaanPenunjang
        } = rekamMedis.objectiveNote

        return res.status(200).json({
            pemeriksaanUmum,
            tandaVital,
            antropometri,
            statusGeneralis,
            pemeriksaanPenunjang
        });

    } catch (error) {
        console.error("[ERROR getObjectiveNote]", error);
        return res.status(500).json({
            error: "Gagal mengambil objective note"
        })
    }

}

export const updateAssessmentNote = async(req, res) => {
    const {
        id: rekamMedisId
    } = req.params;

    const {
        diagnosisPasien
    } = req.body;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: {
                id: rekamMedisId
            },
            include: {
                assessmentNote: true
            }
        })

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam Medis tidak ditemukan"
            })
        }

        if (rekamMedis.status !== "DRAFT") {
            return res.status(400).json({
                error: "Rekam medis sudah final, tidak bisa diubah"
            })
        }

        let assessmentNoteId;

        if (!rekamMedis.assessmentNote) {
            const created = await prisma.assessmentNote.create({
                data: {
                    rekamMedisId
                }
            })
            assessmentNoteId = created.id
        } else {
            assessmentNoteId = rekamMedis.assessmentNote.id

            await prisma.diagnosisPasien.deleteMany({
                where: {
                    assessmentNoteId
                }
            })
        }

        if (diagnosisPasien?.length > 0) {
            await prisma.diagnosisPasien.createMany({
                data: diagnosisPasien.map(d => ({
                    ...d,
                    assessmentNoteId
                }))
            })
        }

        return res.status(200).json({
            message: "Assessment Note berhasil disimpan",
            assessmentNoteId
        });

    } catch (error) {
        console.error("[ERROR updateAssessmentNote]", error);
        return res.status(500).json({
            error: "Gagal mengupdate assessment note"
        })
    }
}

export const getAssessmentNote = async(req, res) => {
    const {
        id: rekamMedisId
    } = req.params;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: {
                id: rekamMedisId
            },
            include: {
                assessmentNote: {
                    include: {
                        diagnosisPasien: {
                            include: {
                                kodeKlinis: true
                            }
                        }
                    }
                }
            }
        })

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam medis tidak ditemukan"
            })
        }

        if (!rekamMedis.assessmentNote) {
            return res.status(200).json({
                message: "Assessment note masih kosong",
                diagnosisPasien: []
            })
        }

        return res.status(200).json({
            diagnosisPasien: rekamMedis.assessmentNote.diagnosisPasien
        });

    } catch (error) {
        console.error("[ERROR getAssessmentNote]", error);
        return res.status(500).json({
            error: "Gagal mengambil assessment note"
        })
    }
}

export const updatePlanningNote = async(req, res) => {
    const {
        id: rekamMedisId
    } = req.params

    const {
        rencanaKlinis
    } = req.body;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: {
                id: rekamMedisId
            },
            include: {
                planningNote: true
            }
        })

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam Medis tidak ditemukan"
            })
        }

        if (rekamMedis.status !== "DRAFT") {
            return res.status(400).json({
                error: "Rekam medis sudah final, tidak bisa diubah"
            })
        }

        let planningNoteId;

        if (!rekamMedis.planningNote) {
            const created = await prisma.planningNote.create({
                data: {
                    rekamMedisId
                }
            });
            planningNoteId = created.id
        } else {
            planningNoteId = rekamMedis.planningNote.id

            await prisma.rencanaKlinis.deleteMany({
                where: {
                    planningNoteId
                }
            })
        }

        if (rencanaKlinis?.length > 0) {
            await prisma.rencanaKlinis.createMany({
                data: rencanaKlinis.map(r => ({
                    ...r,
                    planningNoteId
                }))
            })
        }

        return res.status(200).json({
            message: "Planning Note berhasil disimpan",
            planningNoteId
        })

    } catch (error) {
        console.error("[ERROR updatePlanningNote]", error);
        return res.status(500).json({
            error: "Gagal mengupdate planning note"
        })
    }
}

export const getPlanningNote = async(req, res) => {
    const {
        id: rekamMedisId
    } = req.params;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: {
                id: rekamMedisId
            },
            include: {
                planningNote: {
                    include: {
                        rencanaKlinis: {
                            include: {
                                kodeKlinis: true
                            }
                        }
                    }
                }
            }
        })

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam medis tidak ditemukan"
            })
        }

        if (!rekamMedis.planningNote) {
            return res.status(200).json({
                message: "Planning Note masih kosong",
                rencanKlinis: []
            });
        }

        return res.status(200).json({
            message: "Berhasil mengambil data planning note",
            rencanaKlinis: rekamMedis.planningNote.rencanaKlinis
        })

    } catch (error) {
        console.error("[ERROR getPlanningNote]", error);
        return res.status(500).json({
            error: "Gagal mengambil planning note"
        })
    }
}

export const updateResepObat = async(req, res) => {
    const { id: rekamMedisId } = req.params;
    const { itemObat } = req.body;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: {
                id: rekamMedisId
            },
            include: {
                resepObat: true
            }
        })

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam medis tidak ditemukan"
            })
        }

        if (rekamMedis.status !== "DRAFT") {
            return res.status(400).json({
                error: "Tidak bisa menulis resep pada rekam medis yang sudah final"
            })
        }

        let resepObatId;


        if (!rekamMedis.resepObat) {
            const created = await prisma.resepObat.create({
                data: {
                    rekamMedisId,
                    createdAt: new Date(),
                }
            })

            resepObatId = created.id
        } else {
            resepObatId = rekamMedis.resepObat.id

            await prisma.itemObat.deleteMany({
                where: {
                    resepObatId
                }
            });
        }

        if (itemObat?.length > 0) {
            for (const item of itemObat) {
                await prisma.itemObat.create({
                    data: {
                        resepObatId,
                        obatId: item.obatId,
                        dosis: item.dosis,
                        frekuensi: item.frekuensi,
                        durasi: item.durasi,
                        aturan_pakai: item.aturan_pakai,
                        catatan: item.catatan ?? "",
                    }
                })
            }
        }

        return res.status(200).json({
            message: "Berhasil menyimpan resep obat",
            resepObatId
        })
    } catch (error) {
        console.error("[ERROR updateResepObat]", error);
        return res.status(500).json({
            error: "Gagal mengupdate resep obat"
        })
    }


}

export const getResepObat = async(req, res) => {
    const { id: rekamMedisId } = req.params;

    try {

        const resep = await prisma.rekamMedis.findUnique({
            where: {
                id: rekamMedisId
            },
            include: {
                resepObat: {
                    include: {
                        itemObat: {
                            include: {
                                obat: {
                                    include:{
                                        kodeKlinis: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        if (!resep) {
            return res.status(404).json({
                error: "Rekam medis tidak ditemukan"
            })
        }

        if (!resep.resepObat) {
            return res.status(200).json({
                message: "Belum ada resep obat",
                itemObat: []
            });
        }

        return res.status(200).json(resep.resepObat)

    } catch (error) {
        console.error("[ERROR getResepObat]", error);
        return res.status(500).json({
            error: "Gagal mengambil resep obat"
        })
    }
}

export const akhiriPemeriksaan = async(req, res) => {
    const {
        id: kunjunganId
    } = req.params;

    try {

        const kunjungan = await prisma.kunjungan.findUnique({
            where: {
                id: kunjunganId
            },
            include: {
                rekamMedis: true
            }
        })

        if (!kunjungan) {
            return res.status(404).json({
                error: "Kunjungan tidak ditemukan"
            })
        }

        await prisma.rekamMedis.updateMany({
            where: {
                kunjunganId
            },
            data: {
                status: "FINAL"
            }
        })

        await prisma.kunjungan.update({
            where: {
                id: kunjunganId,
                status: "DalamPemeriksaan"
            },
            data: {
                status: "Selesai",
                endAt: new Date(),
            }
        })

        return res.status(200).json({
            message: "Pemeriksaan berhasil diakhiri. Rekam medis sudah tidak bisa diedit lagi"
        })

    } catch (error) {
        console.error("[ERROR akhiriPemeriksaan]", error);
        return res.status(500).json({
            error: "Gagal mengakhiri pemeriksaan"
        })
    }
}

export const getRekamMedis = async(req, res) => {
    const userId = req.user.userId

    try {

        const dokter = await prisma.tenagaMedis.findUnique({
            where: {
                userId
            }
        })

        if (!dokter) {
            return res.status(404).json({
                error: "Data dokter tidak ditemukan"
            })
        }

        const rekamMedis = await prisma.rekamMedis.findMany({
            where: {
                status: "FINAL",
                versi: "UTAMA",
                tenagaMedisId: dokter.id
            },
            include: {
                kunjungan: {
                    select: {
                        tanggal_kunjungan: true,
                        pasien: {
                            select: {
                                namaLengkap: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                tanggal: "desc"
            }
        })

        const result = rekamMedis.map(rm => ({
            id: rm.id,
            tanggal: rm.tanggal,
            pasien: rm.kunjungan.pasien.namaLengkap,
            kunjunganId: rm.kunjunganId
        }))

        return res.status(200).json(result)

    } catch (error) {
        console.error("[ERROR getRekamMedis]", error);
        return res.status(500).json({
            error: "Gagal mengambil rekam medis"
        })
    }
}

export const getRekamMedisById = async(req, res) => {
    const userId = req.user.userId
    const {
        id: rekamMedisId
    } = req.params;

    try {
        const dokter = await prisma.tenagaMedis.findUnique({
            where: {
                userId
            }
        })

        if (!dokter) {
            return res.status(404).json({
                error: "Dokter tidak ditemukan"
            })
        }

        const utama = await prisma.rekamMedis.findFirst({
            where : {
                id: rekamMedisId,
                versi: "UTAMA",
                status: "FINAL",
                kunjungan: {
                    tenagaMedisId: dokter.id
                }
            },
            include: {
                kunjungan: {
                    include: {
                        pasien: {
                            select: {
                                id: true,
                                namaLengkap: true
                            }
                        }
                    }
                },
                subjectiveNote: {
                    include: {
                        keluhanPasien: true,
                        riwayatPenyakit: true,
                        alergiPasien: true,
                        obatDikonsumsi: true

                    }
                },
                objectiveNote: {
                    include: {
                        pemeriksaanUmum: true,
                        tandaVital: true,
                        antropometri: true,
                        statusGeneralis: true
                    }
                },
                assessmentNote: {
                    include: {
                        diagnosisPasien: true
                    }
                },
                planningNote: {
                    include: {
                        rencanaKlinis: true
                    }
                },
                resepObat: {
                    include: {
                        itemObat: {
                            include: {
                                obat: true
                            }
                        }
                    }
                }
            }
        });

        if (!utama) {
            return res.status(404).json({
                error: "Rekam medis tidak ditemukan"
            })
        }

        const tambahan = await prisma.rekamMedis.findMany({
            where: {
                id: {
                    not: rekamMedisId
                },
                kunjunganId: utama.kunjunganId,
                kunjungan: {
                    pasienId : utama.kunjungan.pasienId
                },
                status: "FINAL",
                versi: {
                    in: ["REVISI", "FOLLOW_UP"]
                }
            },
            include: {
                kunjungan: {
                    include: {
                        pasien: {
                            select: { id: true, namaLengkap: true }
                        }
                    }
                }
            },
            orderBy: {
                tanggal: "asc"
            }
        })

        return res.status(200).json({
            utama,
            tambahan
        })

    } catch (error) {
        console.error("[ERROR getRekamMedisById]", error);
        return res.status(500).json({
            error: "Gagal mengambil data rekam medis pasien"
        })
    }

}