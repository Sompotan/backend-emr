import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const ajukanVerifikasiData = async (req, res) => {

    const userId = req.user.userId;

    const {
        nama_lengkap,
        nomor_handphone,
        pekerjaan,
        tanggal_lahir,
        gender,
        id_status_perkawinan,
        id_status_pembiayaan,
        id_pendidikan,
        id_agama,
        identifiers,
        alamat
    } = req.body;


    try {
        const existing = await prisma.pasien.findUnique({
            where: {
                userId: userId,
            }
        })

        if(existing) {
            return res.status(400).json({error: "Data pasien sudah diajukan sebelumnya"})
        }

        const pasien = await prisma.pasien.create({
            data: {
                userId,
                namaLengkap: nama_lengkap,
                nomorHandphone: nomor_handphone,
                pekerjaan,
                tanggalLahir: new Date(tanggal_lahir),
                gender,
                statusPerkawinanId: id_status_perkawinan,
                statusPembiayaanId: id_status_pembiayaan,
                pendidikanId: id_pendidikan,
                agamaId: id_agama,
                ihsNumber: null, // bisa di-generate nanti
                medicalRecordNumber: null, // diisi saat verifikasi oleh admin

                alamat: {
                    create: {
                        jalan: alamat.jalan,
                        rtRw: alamat.rt_rw,
                        lingkungan: alamat.lingkungan,
                        kelurahanDesa: alamat.kelurahan_desa,
                        kecamatan: alamat.kecamatan,
                        kabupatenKota: alamat.kabupaten_kota
                    }
                },

                identifiers: {
                    create: identifiers.map(i => ({
                        jenisIdentifierId: i.id_jenis_identifier,
                        nilaiIdentifier: i.nilai_identifier,
                        use: i.use || 'Official'
                    }))
                }
            }
        });

        const updateStatusVerifikasi = await prisma.user.update({
            where: { id: userId },
            data: {
                isVerified: "menunggu"
            }
        })

        return res.status(200).json({
            message: "Data berhasil diajukan, Menunggu Verifikasi Admin",
            pasien,
            updateStatusVerifikasi
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Terjadi kesalahan saat menyimpan data pasien."})
    }
}

export const getStatusVerifikasi = async (req, res) => {
    const userId = req.user.userId;

    try {
        const user = await prisma.user.findUnique({
            where: {id: userId},
            select: {
                isVerified: true,
                pasien: {
                    select: {
                        createdAt: true,
                        medicalRecordNumber: true
                    }
                }
            }
        });

        if(!user){
            return res.status(404).json({error: "User Tidak Ditemukan"})
        }

        const pasien = user.pasien;

        let status = "belum";

        if (pasien) {
            const mrn = pasien.medicalRecordNumber;
            const verif = user.isVerified;

            if(verif === "menunggu" && !mrn) {
                status = "menunggu"
            } else if (verif === "verified" && mrn) {
                status = "verified"
            } else if (verif === "verified" && !mrn) {
                status = "invalid"
            }
        }

        return res.status(200).json({
            status,
            isVerified: user.isVerified,
            medicalRecordNumber: pasien?.medicalRecordNumber || null,
            diajukanPada: pasien?.createdAt || null
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({error : "Gagal mengambil status verifikasi"})
    }
}

export const getPasienProfile = async (req, res) => {
    const userId = req.user.userId;

    try {
        const pasien = await prisma.pasien.findUnique({
            where: {userId},
            include: {
                user: {
                    select: {email: true}
                },
                alamat: true,
                identifiers: {
                    include: {
                        jenisIdentifier: true
                    }
                },
                agama: true,
                pendidikan: true,
                statusPerkawinan: true,
                statusPembiayaan: true
            }
        });

        if(!pasien) {
            return res.status(404).json({error: "Profil pasien tidak ditemukan"})
        }

        const response = {
            id: pasien.id,
            email: pasien.user.email,
            nama_lengkap: pasien.namaLengkap,
            gender: pasien.gender,
            tanggal_lahir: pasien.tanggalLahir,
            nomor_handphone: pasien.nomorHandphone,
            pekerjaan: pasien.pekerjaan,
            alamat: pasien.alamat,
            identifier: pasien.identifiers.map(i => ({
                jenis: i.jenisIdentifier.namaJenisIdentifier,
                nilai: i.nilaiIdentifier,
                use: i.use
            })),
            agama: pasien.agama?.namaAgama,
            pendidikan: pasien.pendidikan?.namaPendidikan,
            status_perkawinan: pasien.statusPerkawinan?.namaStatusPerkawinan,
            status_pembiayaan: pasien.statusPembiayaan?.namaStatusPembiayaan
        };



        res.status(200).json(response)

    } catch (error) {
        console.error('[ERROR getPasienProfile', error);
        res.status(500).json({ error: "Gagal mengambil profil pasien" })
    }
}

export const updateEmailProfile = async (req, res) => {
    const { email, kode } = req.body;
    const userId = req.user.userId;

    if(!email || !kode) {
        return res.status(400).json({
            error: "Email dan Kode OTP wajib diisi"
        })
    }

    try {

        const record = await prisma.verifikasiKode.findFirst({
            where: {
                target: email,
                kode,
                tipe: "email",
                expiresAt: {
                    gte: new Date()
                }
            },
            orderBy: {
                createdAt: "desc",
            }
        });

        if(!record) {
            return res.status(400).json({
                error: "Kode OTP tidak valid atau sudah kedaluwarsa"
            })
        }

        await prisma.user.update({
            where: {id: userId},
            data: {email}
        })

        await prisma.verifikasiKode.delete({
            where: {
                id: record.id
            }
        })

        return res.status(200).json({
            message: "Email berhasil diperbarui"
        })

    } catch (error) {
        console.error('[ERROR updateEmailProfile', error);
        res.status(500).json({
            error: "Gagal memperbarui email"
        })
    }

}

export const daftarKunjungan = async (req, res) => {
    const userId = req.user.userId;
    const { tenagaMedisId, tanggal_kunjungan, alasanKunjungan } = req.body;

    if (!tenagaMedisId || !tanggal_kunjungan || !alasanKunjungan) {
        return res.status(400).json({ error: "Semua field wajib diisi." });
    }

    try {
        // Cek apakah pasien sudah punya entri
        const pasien = await prisma.pasien.findUnique({
            where: { userId }
        });

        if (!pasien) {
            return res.status(404).json({ error: "Data pasien tidak ditemukan." });
        }

        const tanggalKunjungan = new Date(tanggal_kunjungan);

        const namaHari = tanggalKunjungan.toLocaleDateString('id-ID', { weekday: 'long' })
        const capitalizedHari = namaHari.charAt(0).toUpperCase() + namaHari.slice(1);

        const dokter = await prisma.tenagaMedis.findUnique({
            where: {
                id: tenagaMedisId
            },
            select: {
                jadwalPraktekHari: true
            }
        });

        if (!dokter || !dokter.jadwalPraktekHari.includes(capitalizedHari)) {
            return res.status(400).json({
                error: `Dokter tidak praktek pada hari ${capitalizedHari}. Silahkan pilih hari lain.`
            })
        }

        // Validasi tidak boleh hari lalu
        if (tanggalKunjungan < new Date(new Date().setHours(0, 0, 0, 0))) {
            return res.status(400).json({ error: "Tanggal kunjungan tidak boleh di masa lalu." });
        }

        // Validasi tidak boleh daftar 2x ke dokter yang sama di hari yang sama
        const existing = await prisma.kunjungan.findFirst({
            where: {
                pasienId: pasien.id,
                tenagaMedisId,
                tanggal_kunjungan: tanggalKunjungan
            }
        });

        if (existing) {
            return res.status(400).json({ error: "Anda sudah mendaftar kunjungan dengan dokter ini di tanggal tersebut." });
        }

        const newKunjungan = await prisma.kunjungan.create({
            data: {
                pasienId: pasien.id,
                tenagaMedisId,
                tanggal_kunjungan: tanggalKunjungan,
                alasanKunjungan
            }
        });

        return res.status(201).json({
            message: "Kunjungan berhasil didaftarkan",
            data: newKunjungan
        });
    } catch (error) {
        console.error("[ERROR daftarKunjungan]", error);
        return res.status(500).json({ error: "Gagal mendaftarkan kunjungan" });
    }
};

export const getRiwayatKunjungan = async(req, res) => {
    const userId = req.user.userId;

    try {

        const pasien = await prisma.pasien.findUnique({
            where: {
                userId
            }
        })

        if(!pasien) {
            return res.status(404).json({
                error: "Data pasien tidak ditemukan"
            })
        }

        const kunjunganList = await prisma.kunjungan.findMany({
            where: {
                pasienId: pasien.id
            },
            orderBy: {
                createdAt: "desc"
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
                }
            }
        })

        const hasil = kunjunganList.map(kunjungan => ({
            id: kunjungan.id,
            nama_dokter: kunjungan.tenagaMedis.nama?.namaLengkap || "-",
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

export const getJadwalPraktek = async (req, res) => {
    const { id } = req.params;

    try {

        const dokter = await prisma.tenagaMedis.findUnique({
            where: { id },
            select: {
                id: true,
                jadwalPraktekHari: true
            }
        });

        if (!dokter) {
            return res.status(404).json({
                error: "Dokter tidak ditemukan"
            })
        }

        return res.status(200).json({
            dokterId: dokter.id,
            jadwalPraktek: dokter.jadwalPraktekHari
        });

    } catch (error) {
        console.error("[ERROR getJadwalPraktek]", error);
        return res.status(500).json({ error: "Gagal mengambil jadwal praktek dokter" });
    }
}

export const updateFotoProfilPasien = async(req, res) => {
    const userId = req.user.userId;
    const { fotoProfil } = req.body;

    try {

        const pasien = await prisma.pasien.update({
            where: { userId },
            data: {
                ...(fotoProfil !== undefined && { fotoProfil })
            }
        });

        return res.status(200).json({
            message: "Foto profil berhasil diperbarui",
            fotoProfil: pasien.fotoProfil
        })

    } catch (error) {
        console.error("[ERROR updateFotoProfilPasien]", error);
        return res.status(500).json({
            error: "Gagal memperbarui foto profil"
        })
    }

}

export const getRekamMedis = async(req, res) => {
    const userId = req.user.userId

    try {
        const pasien = await prisma.pasien.findUnique({
            where: {
                userId
            }
        })

        if (!pasien) {
            return res.status(404).json({
                error: "Data pasien tidak ditemukan"
            })
        }

        const rekamMedis = await prisma.rekamMedis.findMany({
            where: {
                status: "FINAL",
                versi: "UTAMA",
                kunjungan: {
                    pasienId: pasien.id,
                    status: "Selesai"
                }
            },
            include: {
                tenagaMedis: {
                    include: {
                        nama: {
                            select: {
                                namaLengkap: true
                            }
                        }
                    }

                },
                assessmentNote: {
                    include: {
                        diagnosisPasien: {
                            where: {
                                jenisDiagnosis: "Utama"
                            }
                        }
                    }
                },
                kunjungan: {
                    select: {
                        tanggal_kunjungan: true
                    }
                }
            },
            orderBy: {
                tanggal: "desc"
            }
        })

        const result = rekamMedis.map(rm => ({
            id: rm.id,
            tanggal: rm.kunjungan.tanggal_kunjungan,
            dokter: rm.tenagaMedis.nama.namaLengkap,
            versi: rm.versi,
            diagnosis: rm.assessmentNote?.diagnosisPasien[0]?.deskripsi ?? "-",
            kunjunganId: rm.kunjunganId
        }))

        return res.status(200).json(result);



    } catch (error) {
        console.error("[ERROR getRekamMedis]", error);
        return res.status(500).json({
            error: "Gagal mengambil data rekam medis"
        })
    }
}

export const getRekamMedisById = async(req, res) => {
    const userId = req.user.userId
    const {
        id: rekamMedisId
    } = req.params

    try {
        const pasien = await prisma.pasien.findUnique({
            where: {
                userId
            }
        })

        if (!pasien) {
            return res.status(404).json({
                error: "Pasien tidak ditemukan"
            })
        }

        const utama = await prisma.rekamMedis.findFirst({
            where: {
                id: rekamMedisId,
                versi: "UTAMA",
                status: "FINAL",
                kunjungan: {
                    pasienId: pasien.id,
                }
            },
            include: {
                tenagaMedis: {
                    select: {
                        nama: true
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
                error: "Rekam medis tidak ditemukan atau bukan milik pasien ini"
            })
        }

        const tambahan = await prisma.rekamMedis.findMany({
            where: {
                id: {
                    not: rekamMedisId
                },
                kunjunganId: utama.kunjunganId,
                tenagaMedisId: utama.tenagaMedisId,
                status: "FINAL",
                versi: {
                    in: ["REVISI", "FOLLOW_UP"]
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
            error: "Gagal mengambil data rekam medis"
        })
    }
}

