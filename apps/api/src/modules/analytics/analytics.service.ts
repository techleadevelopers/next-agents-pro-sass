import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  getConversasPorDia(agentId: string) {
    return [
      { date: '2025-04-10', total: 18 },
      { date: '2025-04-11', total: 24 },
      { date: '2025-04-12', total: 19 },
    ];
  }
}
