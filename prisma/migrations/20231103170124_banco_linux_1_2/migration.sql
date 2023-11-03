/*
  Warnings:

  - You are about to drop the column `clientId` on the `Products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_clientId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "clientId";
