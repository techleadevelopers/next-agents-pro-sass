export function generateKpiConversao(data: any[]) {
    const totalConversoes = data.reduce((acc, curr) => acc + curr.total, 0);
    const taxa = totalConversoes > 0 ? (data.at(-1)?.total / totalConversoes) * 100 : 0;
    return {
      taxaConversao: parseFloat(taxa.toFixed(1)),
      evolucao: data.map(d => d.total),
    };
  }
  