import { Module } from '@nestjs/common';
import { WhatsAppController } from '../controllers/whatsapp.controller';


@Module({
  controllers: [WhatsAppController],
})
export class WhatsAppRoutesModule {}
