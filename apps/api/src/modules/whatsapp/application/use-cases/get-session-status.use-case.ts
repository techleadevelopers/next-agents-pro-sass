import { BaileysClient } from '../../infrastructure/client/baileys.client';

export class GetSessionStatusUseCase {
  constructor(private readonly client: BaileysClient) {}

  async execute(agentId: string) {
    return this.client.getStatus(agentId);
  }
}
