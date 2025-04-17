import { IsString, IsNumber, IsDateString, IsIn } from 'class-validator';

export class CreateFaturaDto {
  @IsString()
  tenantId!: string;

  @IsString()
  mesRef!: string; // Ex: "04/2025"

  @IsNumber()
  valorTotal!: number;

  @IsIn(['paga', 'pendente', 'vencida'])
  status!: string;

  @IsDateString()
  dataVenc!: string;
}
