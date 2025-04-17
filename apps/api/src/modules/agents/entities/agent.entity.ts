export class AgentEntity {
    constructor(
      public readonly id: string,
      public readonly name: string,
      public readonly type: string,
      public readonly phone: string,
      public readonly tenantId: string,
      public readonly createdAt: Date,
      public readonly updatedAt: Date,
    ) {}
  
    // Exemplo de método de domínio
    isActive(): boolean {
      // Aqui pode ter lógica como status, tempo de inatividade, etc
      return true;
    }
  }
  