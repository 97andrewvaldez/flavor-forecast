/*
  Warnings:

  - You are about to drop the column `restaurantId` on the `FlavorsOfTheDay` table. All the data in the column will be lost.
  - Added the required column `restaurantId` to the `Flavor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FlavorsOfTheDay" DROP CONSTRAINT "FlavorsOfTheDay_restaurantId_fkey";

-- AlterTable
ALTER TABLE "Flavor" ADD COLUMN     "restaurantId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "FlavorsOfTheDay" DROP COLUMN "restaurantId";

-- AddForeignKey
ALTER TABLE "Flavor" ADD CONSTRAINT "Flavor_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
