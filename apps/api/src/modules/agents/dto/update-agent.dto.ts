import { IsOptional, IsString } from 'class-validator';

export class UpdateAgentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  promptBase?: string;

  @IsOptional()
  @IsString()
  type?: string;
}
