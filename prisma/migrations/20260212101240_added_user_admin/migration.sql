/*
  Warnings:

  - You are about to drop the column `userId` on the `course_instructors` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[courseId,instructorId]` on the table `course_instructors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `instructorId` to the `course_instructors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "course_instructors" DROP CONSTRAINT "course_instructors_userId_fkey";

-- DropIndex
DROP INDEX "course_instructors_courseId_userId_key";

-- DropIndex
DROP INDEX "course_instructors_userId_idx";

-- DropIndex
DROP INDEX "users_role_idx";

-- AlterTable
ALTER TABLE "course_instructors" DROP COLUMN "userId",
ADD COLUMN     "instructorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "role",
DROP COLUMN "updatedAt",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instructors" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "avatar" JSONB,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "accountId" TEXT NOT NULL,
    "bio" TEXT,
    "specialization" TEXT,
    "experience" INTEGER,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "instructors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "roles_role_idx" ON "roles"("role");

-- CreateIndex
CREATE UNIQUE INDEX "instructors_email_key" ON "instructors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "instructors_phone_key" ON "instructors"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "instructors_accountId_key" ON "instructors"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admins_accountId_key" ON "admins"("accountId");

-- CreateIndex
CREATE INDEX "course_instructors_instructorId_idx" ON "course_instructors"("instructorId");

-- CreateIndex
CREATE UNIQUE INDEX "course_instructors_courseId_instructorId_key" ON "course_instructors"("courseId", "instructorId");

-- CreateIndex
CREATE UNIQUE INDEX "users_accountId_key" ON "users"("accountId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "instructors" ADD CONSTRAINT "instructors_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_instructors" ADD CONSTRAINT "course_instructors_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "instructors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
