import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAgama = async (req, res) => {
    try {
        const agamaList = await prisma.agama.findMany({
            orderBy: {
                namaAgama: "asc"
            }
        })

        res.status(200).send(agamaList);
    } catch (error) {
        console.error("[ERROR getAgama]", error);
        res.status(500).json({
            error: "Gagal mengambil data agama"
        })
    }
}

export const getPendidikan = async (req, res) => {
    try {
        const pendidikanList = await prisma.pendidikan.findMany({
            orderBy: {
                namaPendidikan: "asc"
            }
        })

        res.status(200).send(pendidikanList);

    } catch (error) {
        console.error("[ERROR getPendidikan]", error);
        res.status(500).json({
            error: "Gagal mengambil data pendidikan"
        })
    }
}

export const getStatusPerkawinan = async (req, res) => {
    try {

        const statusPerkawinanList = await prisma.statusPerkawinan.findMany({
            orderBy: {
                namaStatusPerkawinan: 'asc'
            }
        })

        res.status(200).send(statusPerkawinanList);

    } catch (error) {
        console.error("[ERROR getStatusPerkawinan]", error);
        res.status(500).json({
            error: "Gagal mengambil data status perkawinan"
        })
    }
}

export const getStatusPembiayaan = async (req, res) => {
    try {
        const statusPembiayaanList = await prisma.statusPembiayaan.findMany({
            orderBy: {
                namaStatusPembiayaan: "desc"
            }
        })

        res.status(200).send(statusPembiayaanList);
    } catch (error) {
        console.error("[ERROR getStatusPembiayaan]", error);
        res.status(500).json({
            error: "Gagal mengambil data status pembiayaan"
        })
    }
}

export const getJenisIdentifiers = async (req, res) => {
    try {
        const JenisIdentifierList = await prisma.jenisIdentifier.findMany()
        res.status(200).send(JenisIdentifierList);
    }catch (error) {
        console.error("[ERROR getJenisIdentifiers]", error);
    }
}

export const getListDokter = async (req, res) => {
    try {
        const dokter = await prisma.tenagaMedis.findMany({
            include: {
                user: {
                    select: {
                        isVerified: true
                    }
                },
                nama: {
                    select: {
                        namaLengkap: true
                    }
                }
            }
        })

        const verifiedDoctors = dokter.filter(d => d.user?.isVerified === "verified");

        return res.status(200).send(verifiedDoctors)
    } catch (error) {
        console.error("[ERROR getListDokter]", error);
        return res.status(500).json({
            error: "Gagal mengambil data dokter"
        })
    }
}