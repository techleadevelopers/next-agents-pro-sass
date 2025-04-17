// agents/factories/fake-doc-vectors.factory.ts
import { DocumentoTreinado, VetorDocumento } from '@prisma/client';
import { randomUUID } from 'crypto';

export function generateFakeDoc(agentId: string, tenantId: string): Omit<DocumentoTreinado, 'id' | 'criadoEm'> {
  return {
    agentId,
    tenantId,
    filename: 'treinamento-inicial.pdf',
    mimetype: 'application/pdf',
    tamanho: 20480,
    origem: 'pdf',
    conteudo: 'Este é um conteúdo simulado para treinamento da IA neste nicho específico.',
  };
}

export function generateFakeVectors(documentoId: string): Omit<VetorDocumento, 'id'>[] {
  return Array.from({ length: 5 }).map((_, i) => ({
    documentoId,
    embedding: Buffer.from(new Array(1536).fill(0).map(() => Math.random())), // simula vetor
    conteudoChunk: `Chunk ${i + 1}: texto simulado...`,
    ordem: i,
  }));
}
