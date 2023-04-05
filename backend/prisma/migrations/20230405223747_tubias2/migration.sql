/*
  Warnings:

  - Added the required column `image` to the `Tubias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tubias" ADD COLUMN     "image" TEXT NOT NULL;
