import { BaileysClient } from '../../infrastructure/client/baileys.client';
import { InitSessionDto } from '../dto/init-session.dto';

export class InitSessionUseCase {
  constructor(private readonly client: BaileysClient) {}

  async execute(dto: InitSessionDto) {
    return this.client.startSession(dto.agentId, dto.tenantId);
  }
}
