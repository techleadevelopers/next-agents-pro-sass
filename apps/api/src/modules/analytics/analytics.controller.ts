import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('conversas-por-dia')
  getConversas(@Query('agentId') agentId: string) {
    return this.analyticsService.getConversasPorDia(agentId);
  }
}
