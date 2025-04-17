import { Injectable } from '@nestjs/common';
import { EmbeddingsService } from './embeddings.service';

@Injectable()
export class AgentLangchainService {
  constructor(private readonly embeddingsService: EmbeddingsService) {}

  async askQuestion(agentId: string, question: string) {
    const context = await this.embeddingsService.getContext(agentId, question);
    return `IA: Resposta baseada em: ${context}`;
  }
}
