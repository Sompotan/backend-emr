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

export const getKodeKlinis = async (req, res) => {
    const { search = "" } = req.query;

    try {
        const result = await prisma.kodeKlinis.findMany({
            where: {
                OR: [
                    {kode: {contains: search, mode: "insensitive"}},
                    {Display: {contains: search, mode: "insensitive"}}
                ]
            },
            take: 20,
            orderBy: {
                Display: "asc"
            },
            select: {
                id: true,
                kode: true,
                Display: true,
                system: true
            }
        });

        return res.status(200).json(result)


    } catch (error) {
        console.error("[ERROR getKodeKlinis]", error);
        return res.status(500).json({
            error: "Gagal mengambil data kode klinis"
        })
    }
}


export const getJenisKualifikasi = async (req, res) => {
    try {
        const result = await prisma.jenisKualifikasi.findMany({
            select: {
                id: true,
                namaJenisKualifikasi: true
            },
            orderBy: {
                namaJenisKualifikasi: "asc"
            }
        });

        res.status(200).json(result);
    } catch (error) {
        console.error("[ERROR getJenisKualifikasi]", error);
        res.status(500).json({ error: "Gagal mengambil data jenis kualifikasi" });
    }
};
