/*
  Warnings:

  - The `isVerified` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "VerifikasiStatus" AS ENUM ('belum', 'menunggu', 'verified');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isVerified",
ADD COLUMN     "isVerified" "VerifikasiStatus" NOT NULL DEFAULT 'belum';
