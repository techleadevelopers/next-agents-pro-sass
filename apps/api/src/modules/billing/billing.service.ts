import { Injectable } from '@nestjs/common';
import { WebhookEventDto } from './dto/webhook-event.dto';
import { STRIPE_SECRET } from './billing.constants';

@Injectable()
export class BillingService {
  async processWebhook(body: WebhookEventDto, signature: string, rawBody: any) {
    // TODO: Integrar com Stripe SDK ou Pagar.me
    console.log('[Billing] Webhook recebido:', body.type);

    if (body.type === 'invoice.paid') {
      // ✅ Atualizar plano no banco
    }

    if (body.type === 'customer.subscription.deleted') {
      // ❌ Desativar tenant
    }

    return { received: true };
  }
}
