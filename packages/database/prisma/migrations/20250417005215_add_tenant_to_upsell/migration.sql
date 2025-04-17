/*
  Warnings:

  - Added the required column `tenantId` to the `Upsell` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Upsell" ADD COLUMN     "tenantId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Upsell_tenantId_idx" ON "Upsell"("tenantId");
