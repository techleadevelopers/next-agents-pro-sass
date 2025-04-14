import { Module, Global } from '@nestjs/common'
import { WhatsAppManager } from '../whatsapp.manager'

@Global()
@Module({
  providers: [
    WhatsAppManager,
  ],
  exports: [
    WhatsAppManager,
  ],
})
export class WhatsAppSdkModule {}
