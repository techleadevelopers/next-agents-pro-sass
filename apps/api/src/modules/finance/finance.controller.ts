// apps/api/src/modules/finance/finance.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { FinanceService } from './finance.service';

@Controller('financeiro')
export class FinanceController {
  constructor(private financeService: FinanceService) {}

  @Get('historico')
  historico(@Query('start') start: string, @Query('end') end: string) {
    return this.financeService.historicoPagamentos(start, end);
  }

  @Get('mrr')
  mrr(@Query('periodo') periodo = 'mensal') {
    return this.financeService.mrrMensal(periodo);
  }

  @Get('retencao-churn')
  retencaoChurn() {
    return this.financeService.retencaoChurn();
  }

  @Get('upsell')
  upsell() {
    return this.financeService.upsellMetrics();
  }
}
