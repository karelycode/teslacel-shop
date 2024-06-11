/*
  Warnings:

  - You are about to drop the column `brandId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryBrandId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Brands" AS ENUM ('Xiaomi', 'Samsung', 'Apple', 'Oppo', 'Honor', 'Motorola', 'Poco', 'Realme');

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_brandId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "brandId",
ADD COLUMN     "brand" "Brands" NOT NULL,
ADD COLUMN     "categoryBrandId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Brand";

-- CreateTable
CREATE TABLE "CategoryBrand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CategoryBrand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryBrand_name_key" ON "CategoryBrand"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryBrandId_fkey" FOREIGN KEY ("categoryBrandId") REFERENCES "CategoryBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
