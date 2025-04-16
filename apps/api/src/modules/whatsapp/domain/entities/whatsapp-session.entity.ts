import { WhatsAppStatus } from '../value-objects/whatsapp-status.vo';

export class WhatsAppSession {
  constructor(
    public readonly id: string,
    public readonly agentId: string,
    public readonly tenantId: string,
    public status: WhatsAppStatus,
    public qrCode?: string,
    public connectedAt?: Date,
    public disconnectedAt?: Date,
  ) {}

  connect(qrCode?: string) {
    this.status = WhatsAppStatus.CONNECTED;
    this.qrCode = qrCode;
    this.connectedAt = new Date();
  }

  disconnect() {
    this.status = WhatsAppStatus.DISCONNECTED;
    this.disconnectedAt = new Date();
  }
}
