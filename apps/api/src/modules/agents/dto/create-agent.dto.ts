// apps/api/src/modules/agents/dto/create-agent.dto.ts

import { IsString } from 'class-validator';

export class CreateAgentDto {
  @IsString()
  name!: string;

  @IsString()
  type!: string;

  @IsString()
  phone!: string;
}
