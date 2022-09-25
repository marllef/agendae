/*
  Warnings:

  - You are about to drop the column `userId` on the `Schedule` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_userId_fkey";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "userId",
ADD COLUMN     "ownerId" TEXT;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
