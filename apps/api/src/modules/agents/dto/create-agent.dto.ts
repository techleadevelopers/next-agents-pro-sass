import { IsString, IsOptional } from 'class-validator';

export class CreateAgentDto {
  @IsString()
  name!: string;

  @IsString()
  type!: string; // nicho (ex: odontologia, restaurante...)

  @IsString()
  phone!: string;

  @IsOptional()
  @IsString()
  tenantId?: string; // pego via interceptor no production
}
