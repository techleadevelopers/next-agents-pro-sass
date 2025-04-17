import { Controller, Post, Body, Headers, Req } from '@nestjs/common';
import { BillingService } from './billing.service';
import { WebhookEventDto } from './dto/webhook-event.dto';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post('webhook')
  async handleWebhook(
    @Body() body: WebhookEventDto,
    @Headers('stripe-signature') signature: string,
    @Req() req: any
  ) {
    return this.billingService.processWebhook(body, signature, req.rawBody);
  }
}
