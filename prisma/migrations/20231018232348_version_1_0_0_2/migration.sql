/*
  Warnings:

  - You are about to drop the column `Banner` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `LogoUrl` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CompanyToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Email` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Logo` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CompanyToUser" DROP CONSTRAINT "_CompanyToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyToUser" DROP CONSTRAINT "_CompanyToUser_B_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "Banner",
DROP COLUMN "LogoUrl",
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "Logo" TEXT NOT NULL,
ADD COLUMN     "Password" TEXT NOT NULL,
ADD COLUMN     "invoicing" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "Email" DROP NOT NULL,
ALTER COLUMN "Password" DROP NOT NULL;

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "_CompanyToUser";
