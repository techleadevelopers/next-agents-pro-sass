import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateKpiFinanceDto {
  @IsString()
  tenantId!: string;

  @IsNumber()
  mrr!: number;

  @IsNumber()
  churnRate!: number;

  @IsNumber()
  receitaHoje!: number;

  @IsDateString()
  dataRef!: string; // Ex: "2025-04-16"
}
