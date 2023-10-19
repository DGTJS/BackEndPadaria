/*
  Warnings:

  - Made the column `Email` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Password` on table `clients` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "Email" SET NOT NULL,
ALTER COLUMN "Password" SET NOT NULL;
