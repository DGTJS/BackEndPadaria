/*
  Warnings:

  - You are about to drop the column `categoryCompanty` on the `Company` table. All the data in the column will be lost.
  - Added the required column `categoryCompany` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "categoryCompanty",
ADD COLUMN     "categoryCompany" TEXT NOT NULL;
