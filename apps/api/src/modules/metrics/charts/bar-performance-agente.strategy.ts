export function generateBarPerformance(data: any[]) {
    return data.map(d => ({ name: d.agente, valor: d.total }));
  }
  