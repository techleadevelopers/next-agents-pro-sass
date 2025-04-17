// apps/api/src/modules/debug/whatsapp.debug.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WhatsAppDebugService {
  constructor(private readonly prisma: PrismaService) {}

  async getStatusDoAgent(agentId: string) {
    const session = await this.prisma.whatsAppSession.findFirst({
      where: { agentId },
      orderBy: { createdAt: 'desc' },
    });

    if (!session) {
      return {
        status: 'SEM_SESSÃO',
        message: 'Nenhuma sessão ativa encontrada para esse agente.',
      };
    }

    return {
      status: session.status,
      qrCode: session.qrCode || 'Sem QR code disponível',
      conectadoDesde: session.connectedAt || null,
      desconectadoEm: session.disconnectedAt || null,
    };
  }
}
