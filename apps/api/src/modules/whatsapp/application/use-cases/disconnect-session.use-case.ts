import { BaileysClient } from '../../infrastructure/client/baileys.client';

export class DisconnectSessionUseCase {
  constructor(private readonly client: BaileysClient) {}

  async execute(sessionId: string) {
    await this.client.disconnect(sessionId);
  }
}
