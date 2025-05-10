import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


export const getDokterProfile = async (req, res) => {
    const userId = req.user.userId;

    try {
        const dokter = await prisma.tenagaMedis.findUnique({
            where: { userId },
            include: {
                user: {
                    select: {
                        email: true,
                        isVerified: true
                    }
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
            isVerified: dokter.user?.isVerified,
            fotoProfil: dokter.fotoProfil,
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
                status: {
                    not: "Selesai"
                },
                checkInAt: {
                    not: null
                },
                tanggal_kunjungan: {
                    gte: today,
                    lt: tomorrow
                }
            },
            orderBy: {
                checkInAt: "asc"
            },
            include: {
                pasien: true
            }

        });

        const hasil = antrian.map(k => ({
            id: k.id,
            fotoProfil: k.pasien.fotoProfil,
            nama_pasien: k.pasien.namaLengkap,
            medicalRecordNumber: k.pasien.medicalRecordNumber,
            gender: k.pasien.gender,
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

export const getAntrianById = async (req, res) => {
    const {id} = req.params;
    const userId = req.user.userId;

    try {
        const dokter = await prisma.tenagaMedis.findUnique({
            where: { userId }
        });

        if (!dokter) {
            return res.status(404).json({ error: "Data dokter tidak ditemukan" });
        }

        const DataAntrian = await prisma.kunjungan.findUnique({
            where: {
                id,
            },
            include: {
                pasien: true
            }

        });

        if (!DataAntrian) {
            return res.status(404).json({ error: "Kunjungan tidak ditemukan" });
        }

        const response = {
            id: DataAntrian.id,
            pasienId: DataAntrian.pasien.id,
            fotoProfil: DataAntrian.pasien.fotoProfil,
            nama_pasien: DataAntrian.pasien.namaLengkap,
            medicalRecordNumber: DataAntrian.pasien.medicalRecordNumber,
            tanggal_lahir: DataAntrian.pasien.tanggalLahir,
            gender: DataAntrian.pasien.gender,
            alasan_kunjungan: DataAntrian.alasanKunjungan,
            status: DataAntrian.status
        }

        return res.status(200).json(response);
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

export const mulaiPemeriksaan = async (req, res) => {
    const { id: kunjunganId } = req.params;
    const userId = req.user.userId;

    try {
        // 1. Ambil data dokter
        const dokter = await prisma.tenagaMedis.findUnique({
            where: { userId },
        });

        if (!dokter) {
            return res.status(404).json({
                error: "Data dokter tidak ditemukan",
            });
        }

        // 2. Cek kunjungan valid
        const kunjungan = await prisma.kunjungan.findUnique({
            where: { id: kunjunganId },
            select: { endAt: true },
        });

        if (!kunjungan) {
            return res.status(404).json({
                error: "Kunjungan tidak ditemukan",
            });
        }

        // 3. Jika sudah ada rekam medis DRAFT, langsung return (Open Draft case)
        const existingDraft = await prisma.rekamMedis.findFirst({
            where: {
                kunjunganId,
                status: "DRAFT",
            },
        });

        if (existingDraft) {
            return res.status(200).json({
                message: "Draft pemeriksaan sudah ada",
                data: {
                    id: existingDraft.id,
                    ...existingDraft,
                },
            });
        }

        // 4. Tentukan versi berdasarkan UTAMA sebelumnya
        let versi = "UTAMA";

        const existingUtama = await prisma.rekamMedis.findFirst({
            where: {
                kunjunganId,
                versi: "UTAMA",
            },
        });

        if (existingUtama) {
            if (existingUtama.status === "FINAL") {
                versi = "REVISI"; // atau FOLLOW_UP jika kamu pakai enum tsb
            } else {
                return res.status(400).json({
                    error: "Kunjungan belum selesai. Tidak dapat membuat rekam medis baru",
                });
            }
        }

        // 5. Buat rekam medis baru dengan status DRAFT
        const rekamMedis = await prisma.rekamMedis.create({
            data: {
                kunjunganId,
                tenagaMedisId: dokter.id,
                tanggal: new Date(),
                status: "DRAFT",
                versi,
            },
        });

        // 6. Update status kunjungan jadi DalamPemeriksaan
        await prisma.kunjungan.update({
            where: { id: kunjunganId },
            data: {
                status: "DalamPemeriksaan",
                startAt: new Date(),
            },
        });

        return res.status(200).json({
            message: "Pemeriksaan Dimulai",
            data: {
                id: rekamMedis.id,
                ...rekamMedis,
            },
        });
    } catch (error) {
        console.error("[ERROR mulaiPemeriksaan]", error);
        return res.status(500).json({
            error: "Gagal memulai pemeriksaan",
        });
    }
};

export const updateSubjectiveNote = async(req, res) => {
    const {id: rekamMedisId} = req.params;

    const {
        keluhanPasien,
        riwayatPenyakit,
        alergiPasien,
        obatDikonsumsi
    } = req.body;

    try {
        console.log("[DEBUG] 📥 Body diterima di PATCH /subjective:", req.body);

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
        }


        await prisma.$transaction(async (tx) => {
            await tx.keluhanPasien.deleteMany({ where: { subjectiveNoteId } })
            await tx.riwayatPenyakit.deleteMany({ where: { subjectiveNoteId } })
            await tx.alergiPasien.deleteMany({ where: { subjectiveNoteId } })
            await tx.obatDikonsumsi.deleteMany({ where: { subjectiveNoteId } })

            if (keluhanPasien?.length > 0) {
                await tx.keluhanPasien.createMany({
                    data: keluhanPasien.map(k => ({ ...k, subjectiveNoteId }))
                })
            }

            if (riwayatPenyakit?.length > 0) {
                await tx.riwayatPenyakit.createMany({
                    data: riwayatPenyakit.map(j => ({ ...j, subjectiveNoteId }))
                })
            }

            if (alergiPasien?.length > 0) {
                await tx.alergiPasien.createMany({
                    data: alergiPasien.map(i => ({ ...i, subjectiveNoteId }))
                })
            }

            if (obatDikonsumsi?.length > 0) {
                await tx.obatDikonsumsi.createMany({
                    data: obatDikonsumsi.map(l => ({ ...l, subjectiveNoteId }))
                })
            }

        })



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
            subjectiveNoteId: rekamMedis.subjectiveNote.id,
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

export const updateObjectiveNote = async (req, res) => {
    const { id: rekamMedisId } = req.params;

    const {
        pemeriksaanUmum,
        tandaVital,
        antropometri,
        statusGeneralis,
        pemeriksaanPenunjang,
    } = req.body;

    try {

        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: { id: rekamMedisId },
            include: {
                objectiveNote: true,
            },
        });

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam Medis tidak ditemukan",
            });
        }

        if (rekamMedis.status === "FINAL") {
            return res.status(400).json({
                error: "Rekam Medis sudah final, tidak bisa diubah",
            });
        }

        let objectiveNoteId;

        await prisma.$transaction(async (tx) => {
            if (!rekamMedis.objectiveNote) {
                const created = await tx.objectiveNote.create({
                    data: {
                        rekamMedisId,
                        pemeriksaanPenunjang,
                    },
                });
                objectiveNoteId = created.id;
            } else {
                objectiveNoteId = rekamMedis.objectiveNote.id;

                await tx.objectiveNote.update({
                    where: { id: objectiveNoteId },
                    data: { pemeriksaanPenunjang },
                });

                await tx.pemeriksaanUmum.deleteMany({
                    where: { objectiveNoteId },
                });

                await tx.tandaVital.deleteMany({
                    where: { objectiveNoteId },
                });

                await tx.antropometri.deleteMany({
                    where: { objectiveNoteId },
                });

                await tx.statusGeneralis.deleteMany({
                    where: { objectiveNoteId },
                });
            }

            // Pemeriksaan Umum
            if (pemeriksaanUmum && pemeriksaanUmum.keadaanUmum?.trim()) {
                const { gcsEye = 0, gcsVerbal = 0, gcsMotor = 0, ...rest } = pemeriksaanUmum;
                const gcsTotal = gcsEye + gcsVerbal + gcsMotor;

                await tx.pemeriksaanUmum.create({
                    data: {
                        ...rest,
                        gcsEye,
                        gcsVerbal,
                        gcsMotor,
                        gcsTotal,
                        objectiveNoteId,
                    },
                });

            } else {
                console.warn("[WARNING] Pemeriksaan Umum dilewati karena tidak ada keadaanUmum");
            }

            // Tanda Vital
            if (tandaVital && (tandaVital.tekananDarah || tandaVital.nadi || tandaVital.suhu || tandaVital.frekuensiNafas)) {
                await tx.tandaVital.create({
                    data: {
                        ...tandaVital,
                        objectiveNoteId,
                    },
                });

            }

            // Antropometri
            if (antropometri && (antropometri.beratBadan || antropometri.tinggiBadan || antropometri.imt)) {
                await tx.antropometri.create({
                    data: {
                        ...antropometri,
                        objectiveNoteId,
                    },
                });

            }

            // Status Generalis
            if (statusGeneralis && (
                statusGeneralis.kepalaLeher ||
                statusGeneralis.thorax ||
                statusGeneralis.abdomen ||
                statusGeneralis.ekstremitas ||
                statusGeneralis.lainnya
            )) {

                await tx.statusGeneralis.create({
                    data: {
                        ...statusGeneralis,
                        objectiveNoteId,
                    },
                });

            }
        });

        return res.status(200).json({
            message: "Objective Note berhasil disimpan",
        });
    } catch (error) {
        console.error("[ERROR updateObjectiveNote]", error);
        return res.status(500).json({
            error: "Gagal menyimpan objective note",
        });
    }
};

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
                    kodeKlinisId: d.kodeKlinisId,
                    jenisDiagnosis: d.jenisDiagnosis,
                    deskripsi: d.deskripsi,
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

        const result = rekamMedis.assessmentNote.diagnosisPasien.map(d => ({
            kodeKlinisId: d.kodeKlinisId,
            nama: d.kodeKlinis?.Display || "",
            jenisDiagnosis: d.jenisDiagnosis,
            deskripsi: d.deskripsi
        }))

        return res.status(200).json({
            diagnosisPasien: result
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
                planningNote: true,
                kunjungan: true
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

        await prisma.$transaction(async (tx) => {
            let planningNoteId

            if (!rekamMedis.planningNote) {
                const created = await tx.planningNote.create({
                    data: {
                        rekamMedisId
                    }
                });
                planningNoteId = created.id
            } else {
                planningNoteId = rekamMedis.planningNote.id
                await tx.rencanaKlinis.deleteMany({where : {planningNoteId}})
            }

            for (const r of rencanaKlinis) {
                await tx.rencanaKlinis.create({
                    data: {
                        planningNoteId,
                        kodeKlinisId: r.kodeKlinisId,
                        jenisRencana: r.jenisRencana,
                        jenisLayanan: r.jenisLayanan,
                        tanggalRencana: r.tanggalRencana ? new Date(r.tanggalRencana) : undefined,
                        deskripsi : r.deskripsi
                    }
                })

                if (r.jenisRencana === "Tindakan" && r.resepObat?.length > 0) {
                    await tx.resepObat.upsert({
                        where: {rekamMedisId},
                        update: {
                            itemObat: {
                                deleteMany : {},
                                createMany: {
                                    data: r.resepObat.map(item => ({
                                        obatId: item.obatId,
                                        frekuensi: item.frekuensi,
                                        durasi: item.durasi,
                                        aturan_pakai: item.aturan_pakai,
                                        catatan: item.catatan  ?? ""
                                    }))
                                }
                            }
                        },
                        create: {
                            rekamMedisId,
                            status: "DRAFT",
                            createdAt: new Date(),
                            itemObat: {
                                createMany: {
                                    data: r.resepObat.map(item => ({
                                        obatId: item.obatId,
                                        frekuensi: item.frekuensi,
                                        durasi: item.durasi,
                                        aturan_pakai: item.aturan_pakai,
                                        catatan: item.catatan ?? ""
                                    }))
                                }
                            }
                        }
                    })
                }

                if (r.jenisRencana === "Monitoring" && r.tanggalRencana) {
                    await tx.kunjungan.create({
                        data: {
                            pasienId: rekamMedis.kunjungan.pasienId,
                            tenagaMedisId: rekamMedis.tenagaMedisId,
                            tanggal_kunjungan: new Date(r.tanggalRencana),
                            alasanKunjungan: r.deskripsi ?? "Rencana Monitoring",
                            status: "Menunggu"
                        }
                    })
                }

            }
        })


        return res.status(200).json({
            message: "Planning Note berhasil disimpan",
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
        })

        if (!rekamMedis) {
            return res.status(404).json({
                error: "Rekam medis tidak ditemukan"
            })
        }

        if (!rekamMedis.planningNote) {
            return res.status(200).json({
                message: "Planning Note masih kosong",
                rencanaKlinis: []
            });
        }

        const resepObat = rekamMedis.resepObat?.itemObat.map((item) => ({
            obatId: item.obatId,
            frekuensi: item.frekuensi,
            durasi: item.durasi,
            aturan_pakai: item.aturan_pakai,
            catatan: item.catatan ?? "",
        }));

        // Inject resepObat hanya ke rencana jenis Tindakan
        const rencanaKlinis = rekamMedis.planningNote.rencanaKlinis.map((r) => ({
            kodeKlinisId: r.kodeKlinisId,
            jenisRencana: r.jenisRencana,
            jenisLayanan: r.jenisLayanan,
            deskripsi: r.deskripsi,
            tanggalRencana: r.tanggalRencana,
            resepObat: r.jenisRencana === "Tindakan" ? resepObat : undefined,
        }));

        return res.status(200).json({
            message: "Berhasil mengambil data planning note",
            rencanaKlinis
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

export const akhiriPemeriksaan = async (req, res) => {
    const { id: kunjunganId } = req.params;

    try {
        const kunjungan = await prisma.kunjungan.findUnique({
            where: { id: kunjunganId },
            include: {
                rekamMedis: true,
                pasien: true,
                tenagaMedis: true,
            },
        });

        if (!kunjungan) {
            return res.status(404).json({ error: "Kunjungan tidak ditemukan" });
        }

        const rekamMedisUtama = await prisma.rekamMedis.findFirst({
            where: {
                kunjunganId,
                versi: "UTAMA",
            },
        });

        if (!rekamMedisUtama) {
            return res.status(404).json({ error: "Rekam medis utama tidak ditemukan" });
        }

        const planningNote = await prisma.planningNote.findUnique({
            where: { rekamMedisId: rekamMedisUtama.id },
            include: { rencanaKlinis: true },
        });

        // Filter rencana kontrol ulang / monitoring dengan tanggal
        const followUpRencana = planningNote?.rencanaKlinis.filter(
            (r) =>
                (r.jenisRencana === "Monitoring" || r.jenisRencana === "KontrolUlang") &&
                r.tanggalRencana
        );

        const rekamMedisIds = kunjungan.rekamMedis.map((r) => r.id);

        await prisma.$transaction([
            // Finalisasi semua rekam medis
            prisma.rekamMedis.updateMany({
                where: { id: { in: rekamMedisIds } },
                data: { status: "FINAL" },
            }),

            // Finalisasi resep obat yang masih DRAFT
            prisma.resepObat.updateMany({
                where: {
                    rekamMedisId: { in: rekamMedisIds },
                    status: "DRAFT",
                },
                data: { status: "FINAL" },
            }),

            // Update status kunjungan
            prisma.kunjungan.update({
                where: {
                    id: kunjunganId,
                },
                data: {
                    status: "Selesai",
                    endAt: new Date(),
                },
            }),

            // Buat kunjungan baru jika kontrol ulang/monitoring direncanakan
            ...((followUpRencana ?? []).map((r) =>
                prisma.kunjungan.create({
                    data: {
                        pasienId: kunjungan.pasienId,
                        tenagaMedisId: kunjungan.tenagaMedisId,
                        tanggal_kunjungan: new Date(r.tanggalRencana),
                        alasanKunjungan: r.deskripsi ?? "Kontrol ulang",
                        status: "Menunggu",
                    },
                })
            )),
        ]);

        return res.status(200).json({
            message: "Pemeriksaan berhasil diakhiri. Rekam medis dan resep sudah final.",
        });
    } catch (error) {
        console.error("[ERROR akhiriPemeriksaan]", error);
        return res.status(500).json({
            error: "Gagal mengakhiri pemeriksaan",
        });
    }
};

export const getRekamMedisByPatientId = async(req, res) => {
    const { pasienId } = req.params

    try {

        const rekamMedis = await prisma.rekamMedis.findMany({
            where: {
                status: "FINAL",
                versi: "UTAMA",
                kunjungan: {
                    pasienId: pasienId
                }
            },
            include: {
                tenagaMedis: {
                    select: {
                        nama: {
                            select: {
                                namaLengkap: true
                            }
                        }
                    }
                },
                kunjungan: {
                    select: {
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
            dokter: rm.tenagaMedis.nama.namaLengkap,
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
            },
            include: {
                kunjungan: {
                    include: {
                        pasien: {
                            select: {
                                id: true,
                                namaLengkap: true
                            }
                        },
                        tenagaMedis: {
                            select: {
                                nama: {
                                    select: {
                                        namaLengkap: true
                                    }
                                }
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

export const getRiwayatKunjunganDokter = async(req, res) => {
    const userId = req.user.userId;

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

        const kunjunganList = await prisma.kunjungan.findMany({
            where: {
                tenagaMedisId: dokter.id
            },
            orderBy: {
                createdAt: "asc"
            },
            include: {
                pasien: {
                    select: {
                        namaLengkap: true
                    }
                }
            }
        })


        const hasil = kunjunganList.map(kunjungan => ({
            id: kunjungan.id,
            nama_pasien: kunjungan.pasien.namaLengkap || "-",
            tanggal_kunjungan: kunjungan.tanggal_kunjungan,
            status: kunjungan.status,
            checkInAt: kunjungan.checkInAt,
            alasan_kunjungan: kunjungan.alasanKunjungan
        }));

        return res.status(200).json(hasil)

    } catch (error) {
        console.error('[ERROR getRiwayatKunjungan]', error);
        res.status(500).json({
            error: "Gagal mengambil riwayat kunjungan"
        })
    }
}

export const getPasienInfoByRekamMedisId = async (req, res) => {
    const { id: rekamMedisId } = req.params;

    try {
        const rekamMedis = await prisma.rekamMedis.findUnique({
            where: { id: rekamMedisId },
            include: {
                kunjungan: {
                    include: {
                        pasien: {
                            select: {
                                fotoProfil: true,
                                namaLengkap: true,
                                medicalRecordNumber: true
                            }
                        }
                    }
                }
            }
        });

        if (!rekamMedis) {
            return res.status(404).json({ error: "Rekam medis tidak ditemukan" });
        }

        return res.status(200).json({
            fotoProfil: rekamMedis.kunjungan.pasien.fotoProfil,
            nama_pasien: rekamMedis.kunjungan.pasien.namaLengkap,
            medicalRecordNumber: rekamMedis.kunjungan.pasien.medicalRecordNumber
        });
    } catch (error) {
        console.error("[ERROR getPasienInfoByRekamMedisId]", error);
        return res.status(500).json({ error: "Gagal mengambil info pasien" });
    }
};

export const getObatList = async (req, res) => {
    const search = req.query.search?.toLowerCase() || "";

    try {
        const data = await prisma.obat.findMany({
            where: {
                namaObat: {
                    contains: search,
                    mode: "insensitive"
                }
            },
            orderBy:{namaObat: "asc"},
            take: 20
        })

        const result = data.map((obat) => ({
            id: obat.id,
            label: `${obat.namaObat} ${obat.kekuatan ?? ""} ${obat.bentukSediaan?? ""}`.trim()
        }))

        return res.status(200).json(result)

    } catch (error) {
        console.error("[ERROR getObatList]", error);
        return res.status(500).json({
            error: "Gagal mengambil data obat"
        })
    }

}