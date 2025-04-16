type TemplatePopularidade = {
    categoria: string;
    vendidos: number;
  };
  
  export function generateRadialTemplatePopularidade(
    data: TemplatePopularidade[]
  ) {
    return {
      labels: data.map((t) => t.categoria),
      values: data.map((t) => t.vendidos),
    };
  }
  