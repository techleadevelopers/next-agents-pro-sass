-- CreateTable
CREATE TABLE "DocumentoTreinado" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "origem" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DocumentoTreinado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VetorDocumento" (
    "id" TEXT NOT NULL,
    "documentoId" TEXT NOT NULL,
    "embedding" BYTEA NOT NULL,
    "conteudoChunk" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "VetorDocumento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DocumentoTreinado_agentId_idx" ON "DocumentoTreinado"("agentId");

-- CreateIndex
CREATE INDEX "DocumentoTreinado_tenantId_idx" ON "DocumentoTreinado"("tenantId");

-- CreateIndex
CREATE INDEX "VetorDocumento_documentoId_idx" ON "VetorDocumento"("documentoId");

-- AddForeignKey
ALTER TABLE "DocumentoTreinado" ADD CONSTRAINT "DocumentoTreinado_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VetorDocumento" ADD CONSTRAINT "VetorDocumento_documentoId_fkey" FOREIGN KEY ("documentoId") REFERENCES "DocumentoTreinado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
