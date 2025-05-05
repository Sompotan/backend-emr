import { PrismaClient } from "@prisma/client";
import {generateMRN} from "../utils/generateMedicalRecordNumber.js";
import bcrypt from "bcrypt";


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
        identifier,
        kualifikasi
    } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email}
        })

        if(existingUser) {
            return res.status(400).json({error: "Email sudah terdaftar"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                email,
                passwordHash: hashedPassword,
                role: 'dokter',
                isVerified: 'verified',
            }

        });

        const tenagaMedis = await prisma.tenagaMedis.create({
            data: {
                userId: user.id,
                gender,
                tanggalLahir: new Date(tanggal_lahir),
                nomorHandphone: nomor_handphone,

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
                    create: Array.isArray(identifier)
                        ? identifier.map(i => ({
                            jenisIdentifierId: i.id_jenis_identifier,
                            nilaiIdentifier: i.nilai_identifier
                        }))
                        : {
                            jenisIdentifierId: identifier.id_jenis_identifier,
                            nilaiIdentifier: identifier.nilai_identifier
                        }
                },
                kualifikasi: {
                    create: Array.isArray(kualifikasi)
                        ? kualifikasi.map(k => ({
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

        return res.status(201).json({
            message: "Akun dokter berhasil dibuat",
            dokterId: tenagaMedis.id
        })
    } catch (error) {
        console.error('[ERROR createDoctor]', error);
        return res.status(500).json({ error: "Gagal membuat akun dokter"})
    }
}

export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await prisma.tenagaMedis.findMany({
            include: {
                user: {
                    select: {
                        email: true
                    }
                },
                nama: true,
                alamat: true,
                identifier: {
                    include: {
                        jenisIdentifier:true
                    }
                },
                kualifikasi: {
                    include: {
                        jenisKualifikasi: true
                    }
                }
            }
        });

        const formatted = doctors.map((doctor) => ({
            id: doctor.id,
            nama: doctor.nama?.namaLengkap,
            email: doctor.user?.email,
            gender: doctor.gender,
            tanggal_lahir: doctor.tanggalLahir,
            nomor_handphone: doctor.nomorHandphone,
            alamat: {
                jalan: doctor.alamat?.jalan,
                kelurahan_desa: doctor.alamat?.kelurahanDesa,
                kecamatan: doctor.alamat?.kecamatan,
                kabupaten_kota: doctor.alamat?.kabupatenKota,
            },
            identifier: doctor.identifier.map(i => ({
                jenis_identifier: i.jenisIdentifier?.namaJenisIdentifier,
                nilai_identifier: i.nilaiIdentifier
            })),
            kualifikasi: doctor.kualifikasi.map(j => ({
                jenis_kualifikasi: j.jenisKualifikasi?.namaJenisKualifikasi,
                nomor_kualifikasi: j.nomorKualifikasi,
                tanggal_mulai: j.tanggalMulai,
                tanggal_berakhir: j.tanggalBerakhir,
                institusi_penerbit: j.institusi_penerbit

            }))
        }));

        return res.status(200).json(formatted);

    } catch (error) {
        console.error('[ERROR getAllDoctors]', error);
        return res.status(500).json({ error: "Gagal Mengambil data dokter" })
    }
}

export const getDoctorById = async (req, res) => {
    const id = req.params;

    try{
        const doctor = await prisma.tenagaMedis.findUnique({
            where: id,
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
                    }
                }
            }
        });


        if (!doctor) {
            return res.status(404).json({error: "Dokter tidak ditemukan"})
        }

        const response = {
            id: doctor.id,
            email: doctor.user?.email,
            gender: doctor.gender,
            tanggal_lahir: doctor.tanggalLahir,
            nomor_handphone: doctor.nomorHandphone,
            nama: doctor.nama,
            alamat: doctor.alamat,
            jadwalPraktek: doctor.jadwalPraktekHari,
            identifier: doctor.identifier.map(i => ({
                jenis_identifier: i.jenisIdentifier?.namaJenisIdentifier,
                nilai_identifier: i.nilaiIdentifier
            })),
            kualifikasi: doctor.kualifikasi.map(k => ({
                jenis_kualifikasi: k.jenisKualifikasi?.namaJenisKualifikasi,
                nomor_kualifikasi: k.nomorKualifikasi,
                tanggal_mulai: k.tanggalMulai,
                tanggal_berakhir: k.tanggalBerakhir,
                institusi_penerbit: k.institusiPenerbit
            }))
        };

        return res.status(200).json(response);
    } catch (error) {
        console.error('[ERROR getDoctorById]', error);
        res.status(500).json({ error: "Gagal Mengambil data dokter"})
    }


}

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