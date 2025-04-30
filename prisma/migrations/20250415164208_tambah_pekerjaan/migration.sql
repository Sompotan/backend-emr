/*
  Warnings:

  - Added the required column `pekerjaan` to the `Pasien` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pasien" ADD COLUMN     "pekerjaan" TEXT NOT NULL;
