import {PrismaClient} from "@prisma/client";
import {generateMRN} from "../utils/generateMedicalRecordNumber.js";
import bcrypt from "bcrypt";
import {format} from "date-fns";
import {id} from "date-fns/locale"


const prisma = new PrismaClient();


export const getUnverifiedPatient = async (req, res) => {
    try {
        const data = await prisma.pasien.findMany({
            where: {
                medicalRecordNumber: null
            },
            include: {
                user: {
                    select: {
                        email: true,
                        isVerified: true
                    }
                },
                statusPerkawinan: true,
                pendidikan: true,
                agama: true,
                statusPembiayaan: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });


        if (data.length === 0) {
            return res.status(404).json({ error: "Belum ada pasien yang mengajukan verifikasi data" });
        }

        res.status(200).json(data)

    } catch (error) {
        console.error(error);
        res.status(500).json({ error : "Gagal mengambil data pasien yang belum terverifikasi."})
    }
}

export const getDetailedUnverifiedPatient = async (req, res) => {
    const { id } = req.params;

    try {
        const pasien = await prisma.pasien.findUnique({
            where: {id},
            include: {
                user: {
                    select: {
                        email: true,
                        isVerified: true
                    }
                },
                agama: true,
                pendidikan: true,
                statusPerkawinan: true,
                statusPembiayaan: true,
                alamat: true,
                identifiers: {
                    include: {
                        jenisIdentifier: true
                    }
                }
            }
        });

        if(!pasien || pasien.medicalRecordNumber !== null) {
            return res.status(404).json({
                error: "Pasien tidak ditemukan atau pasien sudah terverifikasi."
            })
        }

        res.status(200).json(pasien)

    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Gagal mengambil data pasien yang belum terverifikasi."})
    }
}

export const verifyPatient = async (req, res) => {
    const { id } = req.params;

    try {
        const pasien = await prisma.pasien.findUnique({
            where: {id},
            include: { user: true }
        })

        if(!pasien) {
            return res.status(404).json({ error: "Pasien tidak ditemukan" })
        }

        if(pasien.medicalRecordNumber) {
            return res.status(404).json({ error: "Pasien sudah terverifikasi." })
        }

        const MRN = await generateMRN(prisma)

        console.log('[DEBUG] medicalRecordNumber:', MRN);


        await prisma.$transaction([
            prisma.pasien.update({
                where: { id },
                data: {
                    medicalRecordNumber: MRN
                }
            }),
            prisma.user.update({
                where: {id: pasien.userId},
                data: {isVerified: 'verified'}
            })
        ]);

        res.status(200).json({
            message: "Pasien berhasil terverifikasi.",
            MRN
        })
    } catch (error) {
        console.error('[ERROR verifikasi pasien]', error);
        res.status(500).json({ error: "Gagal memverifikasi pasien" })
    }
}

export const getVerifiedPatient = async (req, res) => {
    try {
        const data = await prisma.pasien.findMany({
            where: {
                NOT: {
                    medicalRecordNumber: null
                }
            },
            include: {
                user: {
                    select: {
                        email: true,
                        isVerified: true
                    }
                },
                agama: true,
                pendidikan: true,
                statusPerkawinan: true,
                statusPembiayaan: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.status(200).json(data)
    } catch (error) {
        console.error('[ERROR getVerifiedPatient]', error);
        res.status(500).json({ error: "Gagal mengambil data pasien yang sudah terverifikasi."})
    }
}

export const getVerifiedPatientById = async (req, res) => {
    const { id } = req.params;

    try {
        const pasien = await prisma.pasien.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        email: true,
                        isVerified: true
                    }
                },
                agama: true,
                pendidikan: true,
                statusPerkawinan: true,
                statusPembiayaan: true,
                alamat: true,
                identifiers: {
                    include: {
                        jenisIdentifier: true
                    }
                }
            }
        });

        if(!pasien) {
            return res.status(404).json({
                error: "Pasien tidak ditemukan"
            })
        }

        res.status(200).json(pasien)


    } catch (error) {
        console.error('[ERROR getVerifiedPatientById]', error);
        res.status(500).json({ error: "Gagal mendapatakan detail pasien yang sudah terverifikasi."})
    }
}

export const createDoctor = async (req, res) => {
    const {
        email,
        password,
        nama,
        gender,
        tanggal_lahir,
        nomor_handphone,
        alamat,
        nik,
        kualifikasi,
        jadwalPraktekHari,
        status
    } = req.body;

    // Validasi manual awal
    if (!email || !password || !nama || !gender || !tanggal_lahir || !nomor_handphone || !nik) {
        return res.status(400).json({ error: "Mohon lengkapi semua field wajib." });
    }

    try {
        const result = await prisma.$transaction(async (tx) => {
            // Cek apakah email sudah terdaftar
            const existingUser = await tx.user.findUnique({
                where: { email }
            });

            if (existingUser) {
                throw new Error("Email sudah terdaftar");
            }

            // Cari jenis identifier "NIK"
            const jenisIdentifierNIK = await tx.jenisIdentifier.findFirst({
                where: { namaJenisIdentifier: "NIK" },
                select: { id: true }
            });

            if (!jenisIdentifierNIK) {
                throw new Error("Jenis identifier NIK tidak ditemukan");
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Buat user
            const user = await tx.user.create({
                data: {
                    email,
                    passwordHash: hashedPassword,
                    role: "dokter",
                    isVerified: "verified"
                }
            });

            // Buat tenaga medis
            return tx.tenagaMedis.create({
                data: {
                    userId: user.id,
                    gender,
                    tanggalLahir: new Date(tanggal_lahir),
                    nomorHandphone: nomor_handphone,
                    jadwalPraktekHari,
                    status,

                    nama: {
                        create: {
                            namaDepan: nama.nama_depan,
                            namaTengah: nama.nama_tengah,
                            namaBelakang: nama.nama_belakang,
                            namaLengkap: `${nama.prefix ?? ""} ${nama.nama_depan} ${nama.nama_tengah ?? ""} ${nama.nama_belakang} ${nama.suffix ?? ""}`.trim(),
                            prefix: nama.prefix,
                            suffix: nama.suffix
                        }
                    },

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

                    identifier: {
                        create: {
                            jenisIdentifierId: jenisIdentifierNIK.id,
                            nilaiIdentifier: nik
                        }
                    },

                    kualifikasi: {
                        create: Array.isArray(kualifikasi)
                            ? kualifikasi.map((k) => ({
                                jenisKualifikasiId: k.id_jenis_kualifikasi,
                                nomorKualifikasi: k.nomor_kualifikasi,
                                tanggalMulai: new Date(k.tanggal_mulai),
                                tanggalBerakhir: new Date(k.tanggal_berakhir),
                                institusiPenerbit: k.institusi_penerbit
                            }))
                            : {
                                jenisKualifikasiId: kualifikasi.id_jenis_kualifikasi,
                                nomorKualifikasi: kualifikasi.nomor_kualifikasi,
                                tanggalMulai: new Date(kualifikasi.tanggal_mulai),
                                tanggalBerakhir: new Date(kualifikasi.tanggal_berakhir),
                                institusiPenerbit: kualifikasi.institusi_penerbit
                            }
                    }
                }
            });
        });

        return res.status(201).json({
            message: "Akun dokter berhasil dibuat",
            dokterId: result.id
        });

    } catch (error) {
        console.error("[ERROR createDoctor]", error);
        return res.status(500).json({
            error: error.message || "Gagal membuat akun dokter"
        });
    }
};

export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await prisma.tenagaMedis.findMany({
            include: {
                nama: true,
            }
        });

        const formatted = doctors.map((doctor) => ({
            id: doctor.id,
            fotoProfil: doctor.fotoProfil,
            status: doctor.status,
            nama: doctor.nama?.namaLengkap,
            gender: doctor.gender,
        }));

        return res.status(200).json(formatted);

    } catch (error) {
        console.error('[ERROR getAllDoctors]', error);
        return res.status(500).json({ error: "Gagal Mengambil data dokter" })
    }
}

export const getDoctorById = async (req, res) => {
    const { id } = req.params;

    try {
        const doctor = await prisma.tenagaMedis.findUnique({
            where: { id },
            include: {
                user: {
                    select: { email: true }
                },
                nama: true,
                alamat: true,
                identifier: {
                    include: {
                        jenisIdentifier: true
                    }
                },
                kualifikasi: {
                    include: {
                        jenisKualifikasi: true
                    },
                    orderBy: {
                        tanggalMulai: 'desc' // optional: ambil yang paling baru
                    }
                }
            }
        });

        if (!doctor) {
            return res.status(404).json({ error: "Dokter tidak ditemukan" });
        }

        const response = {
            id: doctor.id,
            namaLengkap: doctor.nama?.namaLengkap ?? "-",
            jenisKelamin: doctor.gender,
            tanggalLahir: doctor.tanggalLahir,
            nomorHandphone: doctor.nomorHandphone,
            nik: doctor.identifier.find(i => i.jenisIdentifier?.namaJenisIdentifier === "NIK")?.nilaiIdentifier ?? "-",
            fotoProfil: doctor.fotoProfil ?? null,

            kualifikasi: (() => {
                const k = doctor.kualifikasi[0]; // ambil satu saja, misalnya STR
                if (!k) return null;
                return {
                    jenis: k.jenisKualifikasi?.namaJenisKualifikasi ?? "-",
                    nomor: k.nomorKualifikasi,
                    tanggalMulai: k.tanggalMulai,
                    tanggalBerakhir: k.tanggalBerakhir,
                    institusiPenerbit: k.institusiPenerbit
                };
            })(),

            alamat: {
                jalan: doctor.alamat?.jalan ?? "-",
                rtRw: doctor.alamat?.rtRw ?? "-",
                lingkungan: doctor.alamat?.lingkungan ?? "-",
                kelurahanDesa: doctor.alamat?.kelurahanDesa ?? "-",
                kecamatan: doctor.alamat?.kecamatan ?? "-",
                kabupatenKota: doctor.alamat?.kabupatenKota ?? "-"
            }
        };

        return res.status(200).json(response);

    } catch (error) {
        console.error('[ERROR getDoctorById]', error);
        res.status(500).json({ error: "Gagal Mengambil data dokter" });
    }
};

export const getAllKunjunganAdmin = async (req, res) => {
    const {search, status} = req.query;
    try {
        const kunjunganList = await prisma.kunjungan.findMany({
            where: {
                ...(status && {status}),
                ...(search && {
                    pasien: {
                        namaLengkap: {
                            contains: search,
                            mode: "insensitive"
                        }
                    }
                })
            },
            orderBy: {
                createdAt: "desc"
            },
            include: {
                pasien: {
                    select: {
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
        });

        const hasil = kunjunganList.map(k => ({
            id: k.id,
            fotoProfil: k.pasien.fotoProfil,
            nama_pasien: k.pasien.namaLengkap,
            nama_dokter: k.tenagaMedis.nama?.namaLengkap || "-",
            tanggal_kunjungan: k.tanggal_kunjungan,
            status: k.status,
            checkInAt: k.checkInAt,
        }))

        return res.status(200).json(hasil);

    } catch (error) {
        console.error('[ERROR getAllKunjunganAdmin]', error);
        res.status(500).json({
            error: "Gagal Mengambil data kunjungan"
        })
    }
}

export const getKunjunganDetailAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        const kunjungan = await prisma.kunjungan.findUnique({
            where: {id},
            include: {
                pasien: {
                    select: {
                        namaLengkap: true,
                        tanggalLahir: true,
                        nomorHandphone: true
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
        });

        if (!kunjungan) {
            return res.status(404).json({error: "Kunjungan tidak ditemukan"})
        }

        const result = {
            id: kunjungan.id,
            nama_pasien: kunjungan.pasien.namaLengkap,
            tanggal_lahir: kunjungan.pasien.tanggalLahir,
            nomor_handphone: kunjungan.pasien.nomorHandphone,
            nama_dokter: kunjungan.tenagaMedis.nama?.namaLengkap || "-",
            tanggal_kunjungan: kunjungan.tanggal_kunjungan,
            alasan_kunjungan: kunjungan.alasanKunjungan,
            status: kunjungan.status,
            checkInAt: kunjungan.checkInAt,
            createdAt: kunjungan.createdAt
        };

        return res.status(200).json(result);

    } catch (error) {
        console.error('[ERROR getKunjunganDetailAdmin]', error);
        res.status(500).json({
            error: "Gagal mengambil detail kunjungan"
        })
    }
}

export const checkInKunjungan = async (req, res) => {
    const { id } = req.params;

    try {
        const kunjungan = await prisma.kunjungan.findUnique({ where: { id } });

        if (!kunjungan) {
            return res.status(404).json({ error: "Kunjungan tidak ditemukan" });
        }

        if (kunjungan.checkInAt) {
            return res.status(400).json({ error: "Pasien sudah check-in sebelumnya." });
        }

        const updated = await prisma.kunjungan.update({
            where: { id },
            data: {
                checkInAt: new Date(),
                status: "Diproses"
            }
        });

        return res.status(200).json({
            message: "Pasien berhasil di-check-in",
            data: {
                id: updated.id,
                status: updated.status,
                checkInAt: updated.checkInAt
            }
        });

    } catch (error) {
        console.error("[ERROR checkInKunjungan]", error);
        return res.status(500).json({ error: "Gagal melakukan check-in pasien" });
    }
};

export const updateDokterByAdmin = async (req, res) => {
    const {id} = req.params;
    const {
        email,
        gender,
        tanggal_lahir,
        nomor_handphone,
        nama,
        alamat,
        identifier,
        kualifikasi
    } = req.body;

    if (
        !email || !gender || !tanggal_lahir || !nomor_handphone ||
        !nama || !alamat || !identifier || !kualifikasi
    ) {
        return res.status(400).json({
            error: "Semua field wajib diisi"
        })
    }

    try {

        const dokter = await prisma.tenagaMedis.findUnique({
            where: {
                id
            },
            include: {
                user: true
            }
        });

        if(!dokter) {
            return res.status(404).json({
                error: "Dokter tidak ditemukan"
            })
        }

        await prisma.tenagaMedis.update({
            where: {id},
            data: {
                gender,
                tanggalLahir: new Date(tanggal_lahir),
                nomorHandphone: nomor_handphone,
                nama: {
                    upsert: {
                        update: {
                            namaDepan: nama.nama_depan,
                            namaTengah: nama.nama_tengah,
                            namaBelakang: nama.nama_belakang,
                            namaLengkap: `${nama.prefix ?? ""} ${nama.nama_depan} ${nama.nama_tengah ?? ""} ${nama.nama_belakang} ${nama.suffix ?? ""}`.trim(),
                            prefix: nama.prefix,
                            suffix: nama.suffix
                        },
                        create: {
                            namaDepan: nama.nama_depan,
                            namaTengah: nama.nama_tengah,
                            namaBelakang: nama.nama_belakang,
                            namaLengkap: `${nama.prefix ?? ""} ${nama.nama_depan} ${nama.nama_tengah ?? ""} ${nama.nama_belakang} ${nama.suffix ?? ""}`.trim(),
                            prefix: nama.prefix,
                            suffix: nama.suffix
                        }
                    }
                },

                alamat: {
                    upsert: {
                        update: {
                            jalan: alamat.jalan,
                            rtRw: alamat.rt_rw,
                            lingkungan: alamat.lingkungan,
                            kelurahanDesa: alamat.kelurahan_desa,
                            kecamatan: alamat.kecamatan,
                            kabupatenKota: alamat.kabupaten_kota
                        },
                        create: {
                            jalan: alamat.jalan,
                            rtRw: alamat.rt_rw,
                            lingkungan: alamat.lingkungan,
                            kelurahanDesa: alamat.kelurahan_desa,
                            kecamatan: alamat.kecamatan,
                            kabupatenKota: alamat.kabupaten_kota
                        }
                    }
                }
            }
        });

        await prisma.identifierTenagaMedis.deleteMany({
            where: {
                tenagaMedisId: id
            }
        })
        await prisma.identifierTenagaMedis.createMany({
            data: identifier.map(i => ({
                tenagaMedisId: id,
                jenisIdentifierId: i.id_jenis_identifier,
                nilaiIdentifier: i.nilai_identifier
            })),
        })

        await prisma.kualifikasiTenagaMedis.deleteMany({
            where: {
                tenagaMedisId: id
            }
        })
        await prisma.kualifikasiTenagaMedis.createMany({
            data: kualifikasi.map(k => ({
                tenagaMedisId: id,
                jenisKualifikasiId: k.id_jenis_kualifikasi,
                nomorKualifikasi: k.nomor_kualifikasi,
                tanggalMulai: new Date(k.tanggal_mulai),
                tanggalBerakhir: new Date(k.tanggal_berakhir),
                institusiPenerbit: k.institusi_penerbit
            }))
        })

        return res.status(200).json({
            message: "Data dokter berhasil diperbarui"
        })

    } catch (error) {
        console.error('[ERROR updateDokterByAdmin]', error);
        res.status(500).json({
            error: "Gagal mengupdate data dokter"
        })
    }
}

export const getVerificationStats = async (req, res) => {
    try {
        const pending = await prisma.pasien.count({
            where: {
                medicalRecordNumber: null
            }
        })

        const today = new Date();
        today.setHours(0,0,0,0);

        const verifiedToday = await prisma.pasien.count({
            where: {
                medicalRecordNumber: {
                    not: null
                },
                updatedAt: {
                    gte: today
                }
            }
        })

        return res.status(200).json({
            pending,
            verifiedToday,
        })

    } catch (error) {
        console.error("[getVerificationStats]", error )
        res.status(500).json({
            error: "Gagal mengambil statistik verifikasi"
        })
    }
}

export const createKunjungan = async (req, res) => {
    const {pasienId, tenagaMedisId, tanggal_kunjungan, alasanKunjungan} = req.body;

    if (!pasienId || !tenagaMedisId || !tanggal_kunjungan || !alasanKunjungan) {
        return res.status(400).json({error: "Semua field wajib diisi"})
    }

    try {
        const pasien = await prisma.pasien.findUnique({where: {id: pasienId}})
        const dokter = await prisma.tenagaMedis.findUnique({where: {id: tenagaMedisId}})

        if (!pasien || !dokter) {
            return res.status(404).json({error: "Pasien atau dokter tidak ditemukan"})
        }

        const kunjungan = await prisma.kunjungan.create({
            data: {
                pasienId,
                tenagaMedisId,
                tanggal_kunjungan: new Date(tanggal_kunjungan),
                alasanKunjungan,
                status: "Diproses"
            }
        })

        res.status(200).json(kunjungan)

    } catch (error) {
        console.error("[ERROR tambahKunjungan]", error)
        res.status(500).json({error: "Gagal menambahkan Kunjungan"})
    }
}

export const getSummaryAntrian = async (req,res) => {
    try {
        const totalMenunggu = await prisma.kunjungan.count({
            where : {
                status: "Diproses"
            }
        })

        const selesaiHariIni = await prisma.kunjungan.count({
            where: {
                status: "Selesai",
                tanggal_kunjungan: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0)),
                },
            }
        })

        const today = format(new Date(), "EEEE", { locale: id });

        const dokterAktif = await prisma.tenagaMedis.count({
            where: {
                jadwalPraktekHari: {
                    has: today,
                },
            },
        });

        return res.status(200).json({
            totalMenunggu,
            selesaiHariIni,
            dokterAktif
        })

    } catch (error) {
        console.error("[ERROR getSummaryAntrian]", error);
        res.status(500).json({
            error: "Gagal mengambil data antrian"
        })
    }
}

export const createPatient = async (req, res) => {
    try {
        const {
            nama_lengkap,
            tanggal_lahir,
            nomor_handphone,
            pekerjaan,
            gender,
            id_agama,
            id_pendidikan,
            id_status_perkawinan,
            id_status_pembiayaan,
            alamat,
            identifiers, // array of { id_jenis_identifier, nilai_identifier, use }
        } = req.body;

        // Validasi wajib: pastikan ada setidaknya NIK
        if (!identifiers || identifiers.length === 0) {
            return res.status(400).json({ error: "Minimal satu identifier (NIK) wajib diisi." });
        }

        const mrn = await generateMRN(prisma)

        const pasien = await prisma.pasien.create({
            data: {
                namaLengkap: nama_lengkap,
                tanggalLahir: new Date(tanggal_lahir),
                nomorHandphone: nomor_handphone,
                pekerjaan,
                gender,
                agamaId: id_agama,
                pendidikanId: id_pendidikan,
                statusPerkawinanId: id_status_perkawinan,
                statusPembiayaanId: id_status_pembiayaan,
                ihsNumber: null,
                medicalRecordNumber: mrn,

                alamat: {
                    create: {
                        jalan: alamat.jalan,
                        rtRw: alamat.rt_rw,
                        lingkungan: alamat.lingkungan,
                        kelurahanDesa: alamat.kelurahan_desa,
                        kecamatan: alamat.kecamatan,
                        kabupatenKota: alamat.kabupaten_kota,
                    },
                },

                identifiers: {
                    create: identifiers.map((i) => ({
                        jenisIdentifierId: i.id_jenis_identifier,
                        nilaiIdentifier: i.nilai_identifier,
                        use: i.use || "official",
                    })),
                },
            },
            include: {
                alamat: true,
                identifiers: true,
            },
        });

        return res.status(201).json({
            message: "Pasien berhasil ditambahkan.",
            data: pasien,
        });
    } catch (error) {
        console.error("[ERROR createPatient]", error);
        return res.status(500).json({ error: "Gagal membuat data pasien" });
    }
};

export const getRiwayatRekamMedisByPasien = async (req, res) => {
    try {
        const rekamMedis = await prisma.rekamMedis.findMany({
            where: {
                AND: [
                    {
                        kunjungan: {
                            pasienId: req.params.id
                        }
                    },
                    { status: "FINAL" },
                    { versi: "UTAMA" }
                ]
            },
            include: {
                kunjungan: {
                    include: {
                        tenagaMedis: {
                            select: {
                                nama: true
                            }
                        }
                    }
                },
                assessmentNote: {
                    include: {
                        diagnosisPasien: {
                            where: {
                                jenisDiagnosis: "Utama"
                            },
                            include: {
                                kodeKlinis: true
                            }
                        }
                    }
                },
                planningNote: {
                    include: {
                        rencanaKlinis: {
                            select: {
                                jenisLayanan: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        const result = rekamMedis.map((rm) => ({
            id: rm.id,
            pasienId: rm.kunjungan.pasienId,
            tanggal: rm.createdAt,
            dokter: rm.kunjungan.tenagaMedis?.nama.namaLengkap || "-",
            diagnosa: rm.assessmentNote?.diagnosisPasien?.[0]?.kodeKlinis?.Display || "-",
            layanan: rm.planningNote?.rencanaKlinis?.[0]?.jenisLayanan || "-"
        }));

        res.status(200).json(result);
    } catch (error) {
        console.error("[ERROR getRiwayatRekamMedisByPasien]", error);
        res.status(500).json({ error: "Gagal mengambil data riwayat rekam medis." });
    }
};

export const getRekamMedisDetailByPasien = async (req, res) => {
    const { rekamMedisId } = req.params;
    console.log(rekamMedisId);
    try {
        const rekamMedis = await prisma.rekamMedis.findFirst({
            where: {
                id: rekamMedisId
            },
            include: {
                subjectiveNote: {
                    include: {
                        keluhanPasien: true,
                        riwayatPenyakit: true,
                        alergiPasien: true,
                        obatDikonsumsi: true,
                    },
                },
                objectiveNote: {
                    include: {
                        pemeriksaanUmum: true,
                        tandaVital: true,
                        antropometri: true,
                        statusGeneralis: true,
                    },
                },
                assessmentNote: {
                    include: {
                        diagnosisPasien: {
                            include: {
                                kodeKlinis: true,
                            },
                        },
                    },
                },
                planningNote: {
                    include: {
                        rencanaKlinis: true
                    },
                },
                resepObat: {
                    include: {
                        itemObat: {
                            include: {
                                obat: true
                            }
                        }
                    },
                },
            },
            orderBy: {
                createdAt: "desc", // Ambil rekam medis terbaru
            },
        });

        if (!rekamMedis) {
            return res.status(404).json({ error: "Rekam medis tidak ditemukan." });
        }

        res.status(200).json(rekamMedis);
    } catch (error) {
        console.error("[ERROR getDetailRekamMedisByPasienId]", error);
        res.status(500).json({ error: "Gagal mengambil detail rekam medis pasien." });
    }

}

export const getStatistikDokter = async (req, res) => {
    try {
        const today = new Date()
        const namaHari = today.toLocaleString("id-ID", { weekday: "long" }) // misal: "Senin"
        const capitalizedHari = namaHari.charAt(0).toUpperCase() + namaHari.slice(1)

        // Total dokter
        const total = await prisma.tenagaMedis.count()

        // Ambil semua dokter dengan jadwal
        const allDoctors = await prisma.tenagaMedis.findMany({
            select: {
                id: true,
                jadwalPraktekHari: true,
            },
        })

        // Hitung dokter yang aktif hari ini
        const aktifHariIni = allDoctors.filter(d =>
            d.jadwalPraktekHari.includes(capitalizedHari)
        ).length

        // Hitung jumlah kunjungan hari ini
        const startOfDay = new Date()
        startOfDay.setHours(0, 0, 0, 0)

        const endOfDay = new Date()
        endOfDay.setHours(23, 59, 59, 999)

        const kunjunganHariIni = await prisma.kunjungan.count({
            where: {
                tanggal_kunjungan: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        })

        return res.status(200).json({
            totalDokter: total,
            dokterAktifHariIni: aktifHariIni,
            jumlahKunjunganHariIni: kunjunganHariIni
        })
    } catch (err) {
        console.error("[ERROR DOKTER SUMMARY]", err)
        return res.status(500).json({ error: "Gagal mengambil data summary dokter" })
    }
}

export const getListOrderObat = async (req, res) => {
    try {
        const resep = await prisma.resepObat.findMany({
            where: {
                status: {
                    in: ["DIPESAN", "DISIAPKAN"]
                }
            },
            include: {
                rekamMedis: {
                    include: {
                        kunjungan: {
                            include: {
                                pasien: {
                                    select: {
                                        id: true,
                                        namaLengkap: true,
                                        fotoProfil: true
                                    }
                                },
                                tenagaMedis: {
                                    include: {
                                        nama: {
                                            select: {
                                                namaLengkap: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: "asc" // FIFO: yang masuk lebih dulu ditampilkan di atas
            }
        });

        const result = resep.map((r) => ({
            id: r.id,
            tanggal: r.createdAt,
            status: r.status,
            pasien: {
                id: r.rekamMedis.kunjungan.pasien.id,
                nama: r.rekamMedis.kunjungan.pasien.namaLengkap,
                foto: r.rekamMedis.kunjungan.pasien.fotoProfil
            },
            dokter: {
                nama: r.rekamMedis.kunjungan.tenagaMedis.nama?.namaLengkap ?? "-"
            }
        }));

        return res.status(200).json(result);
    } catch (error) {
        console.error("[ERROR getListOrderObat]", error);
        return res.status(500).json({ error: "Gagal mengambil data order obat" });
    }
};

export const updateStatusOrderObat = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ["DISIAPKAN", "FINAL"];
    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({ error: "Status tidak valid" });
    }

    try {
        const updated = await prisma.resepObat.update({
            where: { id },
            data: { status }
        });

        return res.status(200).json({
            message: `Status resep berhasil diubah menjadi ${status}`,
            data: updated
        });
    } catch (error) {
        console.error("[ERROR updateStatusOrderObat]", error);
        return res.status(500).json({ error: "Gagal mengubah status resep" });
    }
};

export const getResepObatDetail = async (req, res) => {
    const { id } = req.params;

    try {
        const resep = await prisma.resepObat.findUnique({
            where: { id },
            include: {
                rekamMedis: {
                    include: {
                        kunjungan: {
                            include: {
                                pasien: {
                                    include: {
                                        agama: true,
                                        pendidikan: true,
                                        statusPerkawinan: true,
                                        statusPembiayaan: true,
                                        identifiers: {
                                            include: {
                                                jenisIdentifier: true
                                            }
                                        }
                                    }
                                },
                                tenagaMedis: {
                                    include: {
                                        nama: true,
                                        identifier: {
                                            include: {
                                                jenisIdentifier: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                itemObat: {
                    include: {
                        obat: true
                    }
                }
            }
        });

        if (!resep) {
            return res.status(404).json({ error: "Resep obat tidak ditemukan" });
        }

        const pasien = resep.rekamMedis.kunjungan.pasien;
        const dokter = resep.rekamMedis.kunjungan.tenagaMedis;

        const response = {
            id: resep.id,
            tanggal: resep.createdAt,
            pasien: {
                namaLengkap: pasien.namaLengkap,
                jenisKelamin: pasien.gender,
                tanggalLahir: pasien.tanggalLahir,
                nomorHandphone: pasien.nomorHandphone,
                nik: pasien.identifiers.find(i => i.jenisIdentifier?.namaJenisIdentifier === "NIK")?.nilaiIdentifier ?? "-",
                agama: pasien.agama?.namaAgama ?? "-",
                pendidikan: pasien.pendidikan?.namaPendidikan ?? "-",
                statusPerkawinan: pasien.statusPerkawinan?.namaStatusPerkawinan ?? "-",
                statusPembiayaan: pasien.statusPembiayaan?.namaStatusPembiayaan ?? "-",
                medicalRecordNumber: pasien.medicalRecordNumber,
                nomorBPJS: pasien.identifiers.find(i => i.jenisIdentifier?.namaJenisIdentifier === "Nomor BPJS")?.nilaiIdentifier ?? "-",
                pekerjaan: pasien.pekerjaan ?? "-"
            },
            dokter: {
                namaLengkap: dokter.nama?.namaLengkap,
                jenisKelamin: dokter.gender,
                tanggalLahir: dokter.tanggalLahir,
                nomorHandphone: dokter.nomorHandphone,
                nik: dokter.identifier.find(i => i.jenisIdentifier?.namaJenisIdentifier === "NIK")?.nilaiIdentifier ?? "-"
            },
            obat: resep.itemObat.map((item) => ({
                nama: `${item.obat.namaObat} ${item.obat.kekuatan ?? ""}`.trim(),
                aturanPakai: item.aturan_pakai,
                frekuensi: item.frekuensi,
                catatan: item.catatan
            }))
        };

        return res.status(200).json(response);

    } catch (error) {
        console.error("[ERROR getResepObatDetail]", error);
        return res.status(500).json({ error: "Gagal mengambil detail resep obat" });
    }
};

export const getDashboardOverview = async (req, res) => {
    try {
        const hariIni = new Date();
        const awalHariIni = new Date(hariIni.setHours(0, 0, 0, 0));
        const akhirHariIni = new Date(hariIni.setHours(23, 59, 59, 999));

        // Total semua pasien
        const totalPasien = await prisma.pasien.count();

        // Jumlah kunjungan hari ini
        const jumlahKunjunganHariIni = await prisma.kunjungan.count({
            where: {
                tanggal_kunjungan: {
                    gte: awalHariIni,
                    lte: akhirHariIni,
                },
            },
        });

        // Pasien baru minggu ini
        const awalMingguIni = new Date();
        const dayOfWeek = awalMingguIni.getDay();
        awalMingguIni.setDate(awalMingguIni.getDate() - dayOfWeek);
        awalMingguIni.setHours(0, 0, 0, 0);

        const jumlahPasienBaruMingguIni = await prisma.pasien.count({
            where: {
                createdAt: { gte: awalMingguIni },
            },
        });

        // Kunjungan terakhir (limit 3)
        const kunjunganTerakhir = await prisma.kunjungan.findMany({
            where: {
                status: "Selesai", // hanya ambil yang sudah selesai
            },
            take: 3,
            orderBy: {
                tanggal_kunjungan: "desc",
            },
            include: {
                pasien: {
                    select: {
                        namaLengkap: true,
                    },
                },
                tenagaMedis: {
                    select: {
                        nama: {
                            select: {
                                namaLengkap: true,
                            },
                        },
                    },
                },
            },
        });


        const kunjunganList = kunjunganTerakhir.map(k => ({
            namaPasien: k.pasien.namaLengkap,
            tanggal: k.tanggal_kunjungan,
            namaDokter: k.tenagaMedis.nama.namaLengkap,
            status: k.status,
        }));

        return res.status(200).json({
            totalPasien,
            jumlahKunjunganHariIni,
            jumlahPasienBaruMingguIni,
            kunjunganTerakhir: kunjunganList,
        });

    } catch (error) {
        console.error("[ERROR getDashboardOverview]", error);
        return res.status(500).json({ error: "Gagal mengambil data dashboard." });
    }
};



