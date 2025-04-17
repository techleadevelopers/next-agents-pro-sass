// apps/api/src/modules/finance/finance.controller.ts
import {
  Controller,
  Get,
  Query,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { FinanceService } from './finance.service';

@Controller('financeiro')
export class FinanceController {
  constructor(private financeService: FinanceService) {}

  private getTenantId(req: Request): string {
    const tenantId = req.headers['x-tenant-id'] as string;
    if (!tenantId) throw new BadRequestException('x-tenant-id é obrigatório');
    return tenantId;
  }

  @Get('historico')
  historico(
    @Query('start') start: string,
    @Query('end') end: string,
    @Req() req: Request,
  ) {
    const tenantId = this.getTenantId(req);
    return this.financeService.historicoPagamentos(start, end, tenantId);
  }

  @Get('mrr')
  mrr(@Query('periodo') periodo = 'mensal', @Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.financeService.mrrMensal(periodo, tenantId);
  }

  @Get('retencao-churn')
  retencaoChurn(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.financeService.retencaoChurn(tenantId);
  }

  @Get('upsell')
  upsell(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.financeService.upsellMetrics(tenantId);
  }

  @Get('kpis')
  kpisFinanceiros(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.financeService.dashboardKpisFinanceiros(tenantId);
  }

  @Get('faturas')
  faturas(@Req() req: Request) {
    const tenantId = this.getTenantId(req);
    return this.financeService.getFaturasMensais(tenantId);
  }
}
