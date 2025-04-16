/*
  Warnings:

  - You are about to drop the column `agentId` on the `KpiMetric` table. All the data in the column will be lost.
  - You are about to drop the column `metricType` on the `KpiMetric` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `KpiMetric` table. All the data in the column will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `KpiMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxaConversao` to the `KpiMetric` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "KpiMetric" DROP CONSTRAINT "KpiMetric_agentId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_agentId_fkey";

-- AlterTable
ALTER TABLE "KpiMetric" DROP COLUMN "agentId",
DROP COLUMN "metricType",
DROP COLUMN "value",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "evolucao" DOUBLE PRECISION[],
ADD COLUMN     "taxaConversao" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Report";

-- CreateTable
CREATE TABLE "Mensagem" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
