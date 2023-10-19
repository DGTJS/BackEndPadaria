/*
  Warnings:

  - You are about to drop the column `clients_id` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `products_id` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "clients_id",
DROP COLUMN "products_id",
DROP COLUMN "user_id";
