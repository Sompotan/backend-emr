-- CreateEnum
CREATE TYPE "Role" AS ENUM ('pasien', 'dokter', 'admin');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Pria', 'Wanita');

-- CreateEnum
CREATE TYPE "Use" AS ENUM ('Official', 'Informal');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pasien" (
    "id_pasien" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "ihs_number" TEXT NOT NULL,
    "medical_record_number" TEXT NOT NULL,
    "tanggal_lahir" TIMESTAMP(3) NOT NULL,
    "id_status_perkawinan" TEXT NOT NULL,
    "id_status_pembiayaan" TEXT NOT NULL,
    "id_pendidikan" TEXT NOT NULL,
    "id_agama" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pasien_pkey" PRIMARY KEY ("id_pasien")
);

-- CreateTable
CREATE TABLE "NamaPasien" (
    "id_nama_pasien" TEXT NOT NULL,
    "id_pasien" TEXT NOT NULL,
    "nama_depan" TEXT NOT NULL,
    "nama_tengah" TEXT NOT NULL,
    "nama_belakang" TEXT NOT NULL,
    "nama_lengkap" TEXT NOT NULL,
    "use" "Use" NOT NULL,

    CONSTRAINT "NamaPasien_pkey" PRIMARY KEY ("id_nama_pasien")
);

-- CreateTable
CREATE TABLE "KontakPasien" (
    "id_kontak_pasien" TEXT NOT NULL,
    "id_pasien" TEXT NOT NULL,
    "id_jenis_kontak" TEXT NOT NULL,
    "nilai_kontak" TEXT NOT NULL,
    "use" "Use" NOT NULL,

    CONSTRAINT "KontakPasien_pkey" PRIMARY KEY ("id_kontak_pasien")
);

-- CreateTable
CREATE TABLE "JenisKontak" (
    "id_jenis_kontak" TEXT NOT NULL,
    "nama_jenis" TEXT NOT NULL,

    CONSTRAINT "JenisKontak_pkey" PRIMARY KEY ("id_jenis_kontak")
);

-- CreateTable
CREATE TABLE "AlamatPasien" (
    "id_alamat_pasien" TEXT NOT NULL,
    "id_pasien" TEXT NOT NULL,
    "jalan" TEXT NOT NULL,
    "rt_rw" TEXT NOT NULL,
    "lingkungan" TEXT NOT NULL,
    "keluraha_desa" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kabupaten_kota" TEXT NOT NULL,

    CONSTRAINT "AlamatPasien_pkey" PRIMARY KEY ("id_alamat_pasien")
);

-- CreateTable
CREATE TABLE "DokumenPasien" (
    "id_dokumen_pasien" TEXT NOT NULL,
    "id_pasien" TEXT NOT NULL,
    "tipe_dokumen" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,

    CONSTRAINT "DokumenPasien_pkey" PRIMARY KEY ("id_dokumen_pasien")
);

-- CreateTable
CREATE TABLE "IdentifierPasien" (
    "id_identifier_pasien" TEXT NOT NULL,
    "id_pasien" TEXT NOT NULL,
    "id_jenis_identifier" TEXT NOT NULL,
    "nilai_identifier" TEXT NOT NULL,
    "use" TEXT NOT NULL,

    CONSTRAINT "IdentifierPasien_pkey" PRIMARY KEY ("id_identifier_pasien")
);

-- CreateTable
CREATE TABLE "JenisIdentifier" (
    "id_jenis_identifier" TEXT NOT NULL,
    "nama_jenis_identifier" TEXT NOT NULL,

    CONSTRAINT "JenisIdentifier_pkey" PRIMARY KEY ("id_jenis_identifier")
);

-- CreateTable
CREATE TABLE "StatusPerkawinan" (
    "id_status_perkawinan" TEXT NOT NULL,
    "nama_status_perkawinan" TEXT NOT NULL,

    CONSTRAINT "StatusPerkawinan_pkey" PRIMARY KEY ("id_status_perkawinan")
);

-- CreateTable
CREATE TABLE "StatusPembiayaan" (
    "id_status_pembiayaan" TEXT NOT NULL,
    "nama_status_pembiayaan" TEXT NOT NULL,

    CONSTRAINT "StatusPembiayaan_pkey" PRIMARY KEY ("id_status_pembiayaan")
);

-- CreateTable
CREATE TABLE "Pendidikan" (
    "id_pendidikan" TEXT NOT NULL,
    "nama_pendidikan" TEXT NOT NULL,

    CONSTRAINT "Pendidikan_pkey" PRIMARY KEY ("id_pendidikan")
);

-- CreateTable
CREATE TABLE "Agama" (
    "id_agama" TEXT NOT NULL,
    "nama_agama" TEXT NOT NULL,

    CONSTRAINT "Agama_pkey" PRIMARY KEY ("id_agama")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pasien_userId_key" ON "Pasien"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "NamaPasien_id_pasien_key" ON "NamaPasien"("id_pasien");

-- CreateIndex
CREATE UNIQUE INDEX "AlamatPasien_id_pasien_key" ON "AlamatPasien"("id_pasien");

-- AddForeignKey
ALTER TABLE "Pasien" ADD CONSTRAINT "Pasien_id_agama_fkey" FOREIGN KEY ("id_agama") REFERENCES "Agama"("id_agama") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasien" ADD CONSTRAINT "Pasien_id_pendidikan_fkey" FOREIGN KEY ("id_pendidikan") REFERENCES "Pendidikan"("id_pendidikan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasien" ADD CONSTRAINT "Pasien_id_status_pembiayaan_fkey" FOREIGN KEY ("id_status_pembiayaan") REFERENCES "StatusPembiayaan"("id_status_pembiayaan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasien" ADD CONSTRAINT "Pasien_id_status_perkawinan_fkey" FOREIGN KEY ("id_status_perkawinan") REFERENCES "StatusPerkawinan"("id_status_perkawinan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasien" ADD CONSTRAINT "Pasien_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NamaPasien" ADD CONSTRAINT "NamaPasien_id_pasien_fkey" FOREIGN KEY ("id_pasien") REFERENCES "Pasien"("id_pasien") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KontakPasien" ADD CONSTRAINT "KontakPasien_id_jenis_kontak_fkey" FOREIGN KEY ("id_jenis_kontak") REFERENCES "JenisKontak"("id_jenis_kontak") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KontakPasien" ADD CONSTRAINT "KontakPasien_id_pasien_fkey" FOREIGN KEY ("id_pasien") REFERENCES "Pasien"("id_pasien") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlamatPasien" ADD CONSTRAINT "AlamatPasien_id_pasien_fkey" FOREIGN KEY ("id_pasien") REFERENCES "Pasien"("id_pasien") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DokumenPasien" ADD CONSTRAINT "DokumenPasien_id_pasien_fkey" FOREIGN KEY ("id_pasien") REFERENCES "Pasien"("id_pasien") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdentifierPasien" ADD CONSTRAINT "IdentifierPasien_id_jenis_identifier_fkey" FOREIGN KEY ("id_jenis_identifier") REFERENCES "JenisIdentifier"("id_jenis_identifier") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdentifierPasien" ADD CONSTRAINT "IdentifierPasien_id_pasien_fkey" FOREIGN KEY ("id_pasien") REFERENCES "Pasien"("id_pasien") ON DELETE RESTRICT ON UPDATE CASCADE;
