/*
  Warnings:

  - The primary key for the `FlavorsOfTheDay` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "FlavorsOfTheDay" DROP CONSTRAINT "FlavorsOfTheDay_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "FlavorsOfTheDay_pkey" PRIMARY KEY ("id");
