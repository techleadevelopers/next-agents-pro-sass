import { WhatsAppSession } from '../entities/whatsapp-session.entity';

export interface WhatsAppRepository {
  findByAgentId(agentId: string): Promise<WhatsAppSession | null>;
  save(session: WhatsAppSession): Promise<void>;
  deleteBySessionId(sessionId: string): Promise<void>;
}
