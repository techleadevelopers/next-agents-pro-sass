export class WebhookEventDto {
    id!: string;
    object!: string;
    type!: string;
    data!: {
      object: any;
    };
  }
  