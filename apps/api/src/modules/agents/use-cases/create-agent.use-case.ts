import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateAgentDto } from '../dto/create-agent.dto';
import { createDefaultSettings } from '../factories/agent-default-settings.factory';
import { generateFakeKpis } from '../factories/kpi-fake.factory';
import { generateFakeDoc, generateFakeVectors } from '../factories/fake-doc-vectors.factory';

@Injectable()
export class CreateAgentUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(dto: CreateAgentDto, tenantId: string) {
    // 1. Cria o Agente IA
    const agent = await this.prisma.agent.create({
      data: {
        name: dto.name,
        type: dto.type,
        phone: dto.phone,
        tenantId,
      },
    });

    // 2. Cria Settings padrão
    const settings = createDefaultSettings(agent.id);
    await this.prisma.settings.create({ data: settings });

    // 3. Cria Kpis fake
    const kpis = generateFakeKpis();
    for (const kpi of kpis) {
      await this.prisma.kpiMetric.create({ data: kpi });
    }

    // 4. Cria Documento de treino + vetores fake
    const doc = await this.prisma.documentoTreinado.create({
      data: generateFakeDoc(agent.id, tenantId),
    });

    const vetores = generateFakeVectors(doc.id);
    for (const vetor of vetores) {
      await this.prisma.vetorDocumento.create({ data: vetor });
    }

    return agent;
  }
}
