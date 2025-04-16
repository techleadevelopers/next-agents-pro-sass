type Pagamento = {
    date: Date;
    valor: number;
  };
  
  export function generateHistoricoPagamentos(data: Pagamento[]) {
    return {
      labels: data.map((p) => p.date.toISOString().slice(0, 10)),
      series: [
        {
          name: 'Pagamentos',
          data: data.map((p) => p.valor),
        },
      ],
    };
  }
  