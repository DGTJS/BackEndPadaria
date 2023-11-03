/*
  Warnings:

  - You are about to drop the column `client_id` on the `Products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_client_id_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "client_id",
ADD COLUMN     "clientId" TEXT;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
