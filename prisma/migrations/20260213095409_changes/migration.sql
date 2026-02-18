/*
  Warnings:

  - You are about to drop the `cart_items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cart_items" DROP CONSTRAINT "cart_items_courseId_fkey";

-- DropForeignKey
ALTER TABLE "cart_items" DROP CONSTRAINT "cart_items_userId_fkey";

-- DropTable
DROP TABLE "cart_items";

-- CreateTable
CREATE TABLE "lesson_resources" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "file" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lessonId" TEXT NOT NULL,

    CONSTRAINT "lesson_resources_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "lesson_resources_lessonId_idx" ON "lesson_resources"("lessonId");

-- AddForeignKey
ALTER TABLE "lesson_resources" ADD CONSTRAINT "lesson_resources_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
