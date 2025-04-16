export class BaileysClient {
    async startSession(agentId: string, tenantId: string) {
      // TODO: implementar inicialização com QR Code usando Baileys
      return { qrCode: 'base64data', status: 'WAITING_QR' };
    }
  
    async sendMessage(agentId: string, phone: string, message: string) {
      // TODO: usar sessão ativa para enviar a mensagem
    }
  
    async disconnect(sessionId: string) {
      // TODO: encerrar sessão
    }
  
    async getStatus(agentId: string) {
      // TODO: retornar status da sessão
      return { status: 'CONNECTED' };
    }
  }
  