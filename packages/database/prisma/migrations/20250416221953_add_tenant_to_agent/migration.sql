-- AlterTable
ALTER TABLE "Agent" ADD COLUMN     "tenantId" TEXT;

-- CreateIndex
CREATE INDEX "Agent_tenantId_idx" ON "Agent"("tenantId");
