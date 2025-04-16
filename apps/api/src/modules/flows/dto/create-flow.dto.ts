export class CreateFlowDto {
    name!: string;
    nodes!: any[];  // No futuro será tipado com estrutura do builder
    agentId!: string;
  }
  