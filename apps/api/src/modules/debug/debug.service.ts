// apps/api/src/modules/debug/debug.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DebugService {
  constructor(private prisma: PrismaService) {}

  async verifyAgentStatus(agentId: string) {
    const agent = await this.prisma.agent.findUnique({ where: { id: agentId } });
    if (!agent) throw new NotFoundException('Agente não encontrado');

    return {
      id: agent.id,
      name: agent.name,
      type: agent.type,
      createdAt: agent.createdAt,
      updatedAt: agent.updatedAt,
    };
  }

  async verifyWhatsApp(agentId: string) {
    const session = await this.prisma.whatsAppSession.findFirst({
      where: { agentId },
      orderBy: { createdAt: 'desc' },
    });

    if (!session) throw new NotFoundException('Sessão WhatsApp não encontrada');

    return {
      status: session.status,
      connectedAt: session.connectedAt,
      disconnectedAt: session.disconnectedAt,
      qrCode: session.qrCode ?? 'n/a',
    };
  }

  async verifyLangchainConfig(agentId: string) {
    const settings = await this.prisma.settings.findUnique({
      where: { agentId },
    });

    if (!settings) throw new NotFoundException('Configuração IA não encontrada');

    return {
      promptBase: settings.promptBase,
      fallbackMessage: settings.fallbackMessage,
      tools: settings.tools,
      voiceEnabled: settings.voiceEnabled,
    };
  }
}
