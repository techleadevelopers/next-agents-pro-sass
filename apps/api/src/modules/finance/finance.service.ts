// apps/api/src/modules/finance/finance.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { generateHistoricoPagamentos } from './charts/historico-pagamentos.strategy';
import { generateMrrMensal } from './charts/mrr-mensal.strategy';
import { generateRetencaoChurn } from './charts/churn-retencao.strategy';
import { generateUpsellMetrics } from './charts/upsell-metrics.strategy';

@Injectable()
export class FinanceService {
  constructor(private prisma: PrismaService) {}

  async historicoPagamentos(start: string, end: string) {
    const data = await this.prisma.pagamento.findMany({
      where: {
        date: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    return generateHistoricoPagamentos(data);
  }

  async mrrMensal(periodo: string = 'mensal') {
    const data = await this.prisma.pagamento.findMany({
      orderBy: { date: 'asc' },
    });

    return generateMrrMensal(data);
  }

  async retencaoChurn() {
    const ativos = await this.prisma.cliente.count({
      where: { status: 'ativo' },
    });

    const cancelados = await this.prisma.cliente.count({
      where: { status: 'cancelado' },
    });

    return generateRetencaoChurn({ ativos, cancelados });
  }

  async upsellMetrics() {
    const data = await this.prisma.upsell.findMany({
      orderBy: { createdAt: 'asc' },
    });

    return generateUpsellMetrics(data);
  }
}
