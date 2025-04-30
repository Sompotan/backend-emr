/*
  Warnings:

  - You are about to drop the `DokumenPasien` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JenisKontak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KontakPasien` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NamaPasien` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nama_lengkap` to the `Pasien` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomor_handphone` to the `Pasien` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DokumenPasien" DROP CONSTRAINT "DokumenPasien_id_pasien_fkey";

-- DropForeignKey
ALTER TABLE "KontakPasien" DROP CONSTRAINT "KontakPasien_id_jenis_kontak_fkey";

-- DropForeignKey
ALTER TABLE "KontakPasien" DROP CONSTRAINT "KontakPasien_id_pasien_fkey";

-- DropForeignKey
ALTER TABLE "NamaPasien" DROP CONSTRAINT "NamaPasien_id_pasien_fkey";

-- AlterTable
ALTER TABLE "Pasien" ADD COLUMN     "nama_lengkap" TEXT NOT NULL,
ADD COLUMN     "nomor_handphone" TEXT NOT NULL;

-- DropTable
DROP TABLE "DokumenPasien";

-- DropTable
DROP TABLE "JenisKontak";

-- DropTable
DROP TABLE "KontakPasien";

-- DropTable
DROP TABLE "NamaPasien";
