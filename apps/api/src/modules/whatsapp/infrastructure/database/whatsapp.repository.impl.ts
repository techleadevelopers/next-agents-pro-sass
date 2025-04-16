import { PrismaClient } from '@prisma/client';
import { WhatsAppRepository } from '../../domain/repositories/whatsapp.repository';
import { WhatsAppSession } from '../../domain/entities/whatsapp-session.entity';

export class WhatsAppRepositoryImpl implements WhatsAppRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findByAgentId(agentId: string) {
    const session = await this.prisma.whatsAppSession.findFirst({ where: { agentId } });
    if (!session) return null;
    return new WhatsAppSession(
      session.id,
      session.agentId,
      session.tenantId,
      session.status as any,
      session.qrCode ?? undefined,
      session.connectedAt ?? undefined,
      session.disconnectedAt ?? undefined,
    );
  }

  async save(session: WhatsAppSession) {
    await this.prisma.whatsAppSession.upsert({
      where: { id: session.id },
      update: {
        status: session.status,
        qrCode: session.qrCode,
        connectedAt: session.connectedAt,
        disconnectedAt: session.disconnectedAt,
      },
      create: {
        id: session.id,
        agentId: session.agentId,
        tenantId: session.tenantId,
        status: session.status,
        qrCode: session.qrCode,
      },
    });
  }

  async deleteBySessionId(sessionId: string) {
    await this.prisma.whatsAppSession.delete({ where: { id: sessionId } });
  }
}
