/*
  Warnings:

  - The values [Oppo,Poco] on the enum `Brands` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Brands_new" AS ENUM ('Xiaomi', 'Samsung', 'Apple', 'Honor', 'Motorola', 'Realme');
ALTER TABLE "Product" ALTER COLUMN "brand" TYPE "Brands_new" USING ("brand"::text::"Brands_new");
ALTER TYPE "Brands" RENAME TO "Brands_old";
ALTER TYPE "Brands_new" RENAME TO "Brands";
DROP TYPE "Brands_old";
COMMIT;
