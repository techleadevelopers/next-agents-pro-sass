import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
  } from '@nestjs/websockets';
  
  @WebSocketGateway({ namespace: '/ws/whatsapp' })
  export class WhatsAppGateway {
    @SubscribeMessage('join')
    handleJoin(@MessageBody() data: { agentId: string }) {
      // Join room by agentId
    }
  
    sendQRCode(agentId: string, qrCode: string) {
      // Emitir via socket
    }
  
    notifyStatus(agentId: string, status: string) {
      // Emitir status
    }
  }
  