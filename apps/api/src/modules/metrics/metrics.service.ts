import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { generateLineMensagensChart } from './charts/generateLineMensagensChart';

@Injectable()
export class MetricasService {
  constructor(private prisma: PrismaService) {}

  async mensagensPorPeriodo(start: string, end: string) {
    const data = await this.prisma.mensagem.groupBy({
      by: ['agentId', 'date'],
      _count: {
        id: true, // ou outro campo que represente a contagem
      },
      where: {
        date: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
    });

    return generateLineMensagensChart(
      data.map((d) => ({
        agent: d.agentId,
        date: d.date.toISOString().slice(0, 10),
        total: d._count.id, // <- pega o count correto
      }))
    );
  }
}
