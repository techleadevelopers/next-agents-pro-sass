type Upsell = {
    produto: string;
    valor: number;
  };
  
  export function generateUpsellMetrics(data: Upsell[]) {
    const produtos: Record<string, number> = {};
  
    data.forEach((item) => {
      produtos[item.produto] = (produtos[item.produto] || 0) + item.valor;
    });
  
    return Object.entries(produtos).map(([produto, valor]) => ({
      name: produto,
      valor,
    }));
  }
  