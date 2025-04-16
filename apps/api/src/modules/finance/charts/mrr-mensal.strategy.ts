import { format } from 'date-fns';

type Pagamento = {
  date: Date;
  valor: number;
};

export function generateMrrMensal(data: Pagamento[]) {
  const agrupado: Record<string, number> = {};

  for (const p of data) {
    const mes = format(p.date, 'yyyy-MM');
    agrupado[mes] = (agrupado[mes] || 0) + p.valor;
  }

  return {
    labels: Object.keys(agrupado),
    series: [
      {
        name: 'MRR',
        data: Object.values(agrupado),
      },
    ],
  };
}
