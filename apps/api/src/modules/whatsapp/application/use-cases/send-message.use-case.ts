import { SendMessageDto } from '../dto/send-message.dto';
import { BaileysClient } from '../../infrastructure/client/baileys.client';

export class SendMessageUseCase {
  constructor(private readonly client: BaileysClient) {}

  async execute(agentId: string, dto: SendMessageDto) {
    await this.client.sendMessage(agentId, dto.phone, dto.message);
  }
}
