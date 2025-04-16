// apps/api/src/modules/reports/dto/exportar-relatorio.dto.ts
import { IsIn, IsOptional } from 'class-validator';

export class ExportarRelatorioDto {
  @IsIn(['csv', 'pdf'])
  tipo!: 'csv' | 'pdf';

  @IsOptional()
  periodo?: string;
}
