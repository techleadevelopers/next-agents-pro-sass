import { Injectable } from '@nestjs/common';

@Injectable()
export class EmbeddingsService {
  async getContext(agentId: string, question: string): Promise<string> {
    // Simula um chunk vetorizado
    return `Documentos relacionados ao agente ${agentId}`;
  }
}
