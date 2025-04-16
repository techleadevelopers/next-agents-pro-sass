// apps/api/src/modules/integrations/integrations.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { WebhookDto } from './dto/webhook.dto';

@Controller('integrations')
export class IntegrationsController {
  constructor(private readonly service: IntegrationsService) {}

  @Get('docs')
  getApiDocs() {
    return this.service.getApiDocumentation();
  }

  @Post('webhook')
  receiveWebhook(@Body() dto: WebhookDto) {
    return this.service.handleWebhook(dto);
  }

  @Get('crms')
  getCRMsSuportados() {
    return this.service.listarCRMs();
  }
}
