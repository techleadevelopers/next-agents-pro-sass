/*
  Warnings:

  - Added the required column `tenantId` to the `Pagamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pagamento" ADD COLUMN     "tenantId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "FaturaMensal" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "mesRef" TEXT NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "dataVenc" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FaturaMensal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KpiFinance" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "mrr" DOUBLE PRECISION NOT NULL,
    "churnRate" DOUBLE PRECISION NOT NULL,
    "receitaHoje" DOUBLE PRECISION NOT NULL,
    "dataRef" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KpiFinance_pkey" PRIMARY KEY ("id")
);
