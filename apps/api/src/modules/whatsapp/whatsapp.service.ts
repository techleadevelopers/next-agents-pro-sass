import { Injectable } from '@nestjs/common';
import { SendMessageUseCase } from './application/use-cases/send-message.use-case';
import { InitSessionUseCase } from './application/use-cases/init-session.use-case';
import { DisconnectSessionUseCase } from './application/use-cases/disconnect-session.use-case';
import { GetSessionStatusUseCase } from './application/use-cases/get-session-status.use-case';
import { SendMessageDto } from './application/dto/send-message.dto';
import { InitSessionDto } from './application/dto/init-session.dto';

@Injectable()
export class WhatsAppService {
  constructor(
    private readonly sendMessageUseCase: SendMessageUseCase,
    private readonly initSessionUseCase: InitSessionUseCase,
    private readonly disconnectSessionUseCase: DisconnectSessionUseCase,
    private readonly getStatusUseCase: GetSessionStatusUseCase,
  ) {}

  async sendMessage(agentId: string, dto: SendMessageDto) {
    return this.sendMessageUseCase.execute(agentId, dto);
  }

  async initSession(dto: InitSessionDto) {
    return this.initSessionUseCase.execute(dto);
  }

  async disconnect(sessionId: string) {
    return this.disconnectSessionUseCase.execute(sessionId);
  }

  async getStatus(agentId: string) {
    return this.getStatusUseCase.execute(agentId);
  }
}
