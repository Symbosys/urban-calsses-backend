-- CreateTable
CREATE TABLE "offline_centers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "image" JSONB,
    "locationUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "offline_centers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "offline_centers_city_idx" ON "offline_centers"("city");

-- CreateIndex
CREATE INDEX "offline_centers_isActive_idx" ON "offline_centers"("isActive");
