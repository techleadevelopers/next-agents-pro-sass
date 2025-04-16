// apps/api/src/modules/dashboard/charts/grafico-combo.strategy.ts

export function generateGraficoCombo(pagamentos: any[], upsells: any[]) {
    const pagamentosSeries = pagamentos.map(p => ({
      x: p.date.toISOString().slice(0, 10),
      y: p.valor,
    }));
  
    const upsellSeries = upsells.map(u => ({
      x: u.createdAt.toISOString().slice(0, 10),
      y: u.valor,
    }));
  
    return {
      series: [
        { name: 'Pagamentos', data: pagamentosSeries },
        { name: 'Upsells', data: upsellSeries },
      ],
    };
  }
  