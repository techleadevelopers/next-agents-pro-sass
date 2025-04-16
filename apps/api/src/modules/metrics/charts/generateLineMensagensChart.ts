// apps/api/src/modules/metrics/charts/line-mensagens-por-periodo.strategy.ts

type LinhaPorPeriodo = {
    agent: string;
    date: string; // yyyy-mm-dd
    total: number;
  };
  
  export function generateLineMensagensChart(data: LinhaPorPeriodo[]) {
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
  