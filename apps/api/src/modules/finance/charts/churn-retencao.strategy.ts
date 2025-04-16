type Input = {
    ativos: number;
    cancelados: number;
  };
  
  export function generateRetencaoChurn({ ativos, cancelados }: Input) {
    const total = ativos + cancelados;
    const retencao = ((ativos / total) * 100).toFixed(1);
    const churn = ((cancelados / total) * 100).toFixed(1);
  
    return {
      retencao: Number(retencao),
      churn: Number(churn),
    };
  }
  