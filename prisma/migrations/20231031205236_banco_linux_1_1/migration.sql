/*
  Warnings:

  - You are about to drop the column `BackgroundColor` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `Logo` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `TextColor` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "BackgroundColor",
DROP COLUMN "Logo",
DROP COLUMN "TextColor",
ADD COLUMN     "Signature" BOOLEAN NOT NULL DEFAULT false;
