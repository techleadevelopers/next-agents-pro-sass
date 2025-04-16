// apps/api/src/modules/integrations/integrations.service.ts
import { Injectable } from '@nestjs/common';
import { WebhookDto } from './dto/webhook.dto';
import { sendToSalesforce } from './adapters/crm-salesforce.adapter';
import { dispatchWebhook } from './adapters/webhook.dispatcher.adapter';

@Injectable()
export class IntegrationsService {
  getApiDocumentation() {
    return {
      title: 'NextAgent-Pro API',
      version: '1.0.0',
      endpoints: [
        { method: 'POST', path: '/webhook', description: 'Receber Webhook externo' },
        { method: 'GET', path: '/crms', description: 'Listar CRMs suportados' },
      ],
    };
  }

  async handleWebhook(dto: WebhookDto) {
    await dispatchWebhook(dto);
    return { success: true };
  }

  listarCRMs() {
    return ['Salesforce', 'Pipedrive', 'RD Station', 'HubSpot'];
  }
}
