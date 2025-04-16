// apps/api/src/modules/dashboard/charts/kpis-gerais.strategy.ts

type KPIInput = {
    mrr: number;
    novosClientes: number;
    churnRate: number;
  };
  
  export function generateKPIs(data: KPIInput) {
    return {
      mrrAtual: data.mrr,
      novosClientes: data.novosClientes,
      churnRate: data.churnRate,
    };
  }
  