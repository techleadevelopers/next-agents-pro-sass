// apps/api/src/modules/finance/finance.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FinanceService {
  constructor(private prisma: PrismaService) {}

  // ✔️ Corrigido para aceitar 3 argumentos
  historicoPagamentos(start: string, end: string, tenantId: string) {
    return this.prisma.pagamento.findMany({
      where: {
        tenantId,
        date: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      orderBy: { date: 'asc' },
    });
  }

  // ✔️ Corrigido para aceitar 2 argumentos
  mrrMensal(periodo: string, tenantId: string) {
    return this.prisma.kpiFinance.findMany({
      where: { tenantId },
      orderBy: { dataRef: 'desc' },
      take: periodo === 'mensal' ? 12 : 30,
    });
  }

  // ✔️ Recebe tenantId
  retencaoChurn(tenantId: string) {
    return this.prisma.kpiFinance.findMany({
      where: { tenantId },
      orderBy: { dataRef: 'desc' },
      take: 6,
    });
  }

  // ✔️ Recebe tenantId
  upsellMetrics(tenantId: string) {
    return this.prisma.upsell.aggregate({
      where: { tenantId },
      _sum: { valor: true },
    });
  }

  // ✔️ Recebe tenantId
  dashboardKpisFinanceiros(tenantId: string) {
    return this.prisma.kpiFinance.findFirst({
      where: { tenantId },
      orderBy: { dataRef: 'desc' },
    });
  }

  // ✔️ Função nova que tava faltando
  getFaturasMensais(tenantId: string) {
    return this.prisma.faturaMensal.findMany({
      where: { tenantId },
      orderBy: { dataVenc: 'desc' },
    });
  }
}
