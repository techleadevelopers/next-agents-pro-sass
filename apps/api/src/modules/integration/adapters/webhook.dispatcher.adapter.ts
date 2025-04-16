// apps/api/src/modules/integrations/adapters/webhook-dispatcher.adapter.ts
import { WebhookDto } from '../dto/webhook.dto';

export async function dispatchWebhook(dto: WebhookDto) {
  // Em produção: lógica real para processar eventos
  console.log('[Webhook] Evento:', dto.event);
  console.log('[Webhook] Payload:', dto.payload);
}
