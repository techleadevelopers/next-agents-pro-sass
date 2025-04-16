// apps/api/src/modules/reports/strategies/area-relatorio-detalhado.strategy.ts
type RelatorioDetalhadoRaw = {
    date: string;
    agent: string;
    total: number;
  };
  
  export function generateAreaChartRelatorio(data: RelatorioDetalhadoRaw[]) {
    const grouped = data.reduce((acc, curr) => {
      if (!acc[curr.agent]) acc[curr.agent] = [];
      acc[curr.agent].push({ x: curr.date, y: curr.total });
      return acc;
    }, {} as Record<string, { x: string; y: number }[]>);
  
    return {
      labels: [...new Set(data.map(d => d.date))],
      series: Object.entries(grouped).map(([name, data]) => ({ name, data })),
    };
  }
  