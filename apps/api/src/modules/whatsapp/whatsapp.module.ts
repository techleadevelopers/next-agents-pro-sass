import { Module } from '@nestjs/common';
import { WhatsAppController } from './presentation/controllers/whatsapp.controller';
import { WhatsAppService } from './whatsapp.service';
import { WhatsAppGateway } from './infrastructure/gateways/whatsapp.gateway';
import { BaileysClient } from './infrastructure/client/baileys.client';
import { InitSessionUseCase } from './application/use-cases/init-session.use-case';
import { SendMessageUseCase } from './application/use-cases/send-message.use-case';
import { DisconnectSessionUseCase } from './application/use-cases/disconnect-session.use-case';
import { GetSessionStatusUseCase } from './application/use-cases/get-session-status.use-case';

@Module({
  controllers: [WhatsAppController],
  providers: [
    WhatsAppService,
    WhatsAppGateway,
    BaileysClient,

    // Use Cases
    {
      provide: InitSessionUseCase,
      useFactory: (client: BaileysClient) => new InitSessionUseCase(client),
      inject: [BaileysClient],
    },
    {
      provide: SendMessageUseCase,
      useFactory: (client: BaileysClient) => new SendMessageUseCase(client),
      inject: [BaileysClient],
    },
    {
      provide: DisconnectSessionUseCase,
      useFactory: (client: BaileysClient) => new DisconnectSessionUseCase(client),
      inject: [BaileysClient],
    },
    {
      provide: GetSessionStatusUseCase,
      useFactory: (client: BaileysClient) => new GetSessionStatusUseCase(client),
      inject: [BaileysClient],
    },
  ],
  exports: [WhatsAppService],
})
export class WhatsAppModule {}
