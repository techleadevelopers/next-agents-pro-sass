// apps/api/src/modules/dashboard/dashboard.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { generateKPIs } from './charts/kpis-gerais.strategy';
import { generateGraficoCombo } from './charts/grafico-combo.strategy';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getKpisGerais() {
    const [mrrTotal, novosClientes, churnRate] = await Promise.all([
      this.prisma.pagamento.aggregate({ _sum: { valor: true } }),
      this.prisma.cliente.count({ where: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } } }),
      this.prisma.cliente.count({ where: { status: 'cancelado' } }),
    ]);

    return generateKPIs({
      mrr: mrrTotal._sum.valor ?? 0,
      novosClientes,
      churnRate,
    });
  }

  async getGraficoCombo() {
    const pagamentos = await this.prisma.pagamento.findMany({
      orderBy: { date: 'asc' },
    });

    const upsells = await this.prisma.upsell.findMany({
      orderBy: { createdAt: 'asc' },
    });

    return generateGraficoCombo(pagamentos, upsells);
  }
}
