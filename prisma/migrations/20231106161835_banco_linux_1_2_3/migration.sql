/*
  Warnings:

  - Added the required column `company_id` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Banner` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "Banner" TEXT NOT NULL,
ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "items" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "company_id" TEXT NOT NULL,
ADD COLUMN     "scheduledTime" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
