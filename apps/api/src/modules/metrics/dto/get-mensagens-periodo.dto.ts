import { IsDateString } from 'class-validator';

export class GetMensagensPorPeriodoDto {
  @IsDateString()
  start!: string;

  @IsDateString()
  end!: string;
}
