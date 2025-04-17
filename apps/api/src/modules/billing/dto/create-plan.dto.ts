export class CreatePlanDto {
    name!: string;
    price!: number;
    maxAgents!: number;
    maxUsers?: number;
    features!: string[];
  }
  