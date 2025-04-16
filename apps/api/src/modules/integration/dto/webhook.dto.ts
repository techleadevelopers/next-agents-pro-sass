// apps/api/src/modules/integrations/dto/webhook.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class WebhookDto {
  @IsString()
  event!: string;

  @IsString()
  payload!: string;

  @IsOptional()
  source?: string;
}
