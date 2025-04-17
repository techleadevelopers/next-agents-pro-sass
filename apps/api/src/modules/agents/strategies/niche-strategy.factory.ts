export class NicheStrategyFactory {
    static getPrompt(niche: string): string {
      switch (niche) {
        case 'odontologia':
          return 'Você é um assistente de clínica odontológica.';
        case 'restaurante':
          return 'Você atende pedidos em um restaurante.';
        default:
          return 'Você é um assistente inteligente.';
      }
    }
  }
  