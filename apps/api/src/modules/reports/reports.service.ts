// apps/api/src/modules/reports/reports.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { generateAreaChartRelatorio } from './strategies/area-relatorio-detalhado.strategy';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getRelatorioDetalhado(periodo = '30d') {
    const dias = { '7d': 7, '30d': 30, '90d': 90 }[periodo] || 30;
    const from = new Date();
    from.setDate(from.getDate() - dias);

    const data = await this.prisma.mensagem.groupBy({
      by: ['agentId', 'date'],
      _count: true,
      where: {
        date: { gte: from },
      },
    });

    return generateAreaChartRelatorio(
      data.map(d => ({
        agent: d.agentId,
        date: d.date.toISOString().slice(0, 10),
        total: d._count,
      })),
    );
  }

  async exportarRelatorio(tipo: 'csv' | 'pdf') {
    // 👇 Aqui simulamos exportação (realmente exportar exige lib extra como pdfkit ou papaparse)
    return {
      message: `Relatório gerado com sucesso em formato ${tipo.toUpperCase()}`,
      link: `/exports/relatorio.${tipo}`,
    };
  }
}
