-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'pt-BR',
    "promptBase" TEXT NOT NULL,
    "fallbackMessage" TEXT NOT NULL,
    "tools" TEXT[],
    "voiceGender" TEXT,
    "voiceSpeed" DOUBLE PRECISION,
    "voiceEnabled" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings_agentId_key" ON "Settings"("agentId");

-- AddForeignKey
ALTER TABLE "Settings" ADD CONSTRAINT "Settings_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
