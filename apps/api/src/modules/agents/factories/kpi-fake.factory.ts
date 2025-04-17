// agents/factories/kpi-fake.factory.ts
import { KpiMetric } from '@prisma/client';

export function generateFakeKpis(): Omit<KpiMetric, 'id' | 'createdAt'>[] {
  return Array.from({ length: 7 }).map((_, i) => {
    const evolucao = Array.from({ length: 7 }).map(() => Math.random() * 10 + 80);
    return {
      date: new Date(Date.now() - i * 86400000),
      taxaConversao: parseFloat((Math.random() * 0.5 + 0.4).toFixed(2)), // 40% a 90%
      evolucao,
    };
  });
}
