/*
  Warnings:

  - Added the required column `pricePerNight` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" ADD COLUMN     "pricePerNight" INTEGER NOT NULL;
