export function formatCurrency(value: number): string {
    return `R$ ${(value / 100).toFixed(2)}`;
  }
  