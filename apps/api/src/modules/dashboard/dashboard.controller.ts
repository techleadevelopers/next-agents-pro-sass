// apps/api/src/modules/dashboard/dashboard.controller.ts
import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('kpis')
  getKpis() {
    return this.dashboardService.getKpisGerais();
  }

  @Get('graficos-combo')
  getGraficoCombo() {
    return this.dashboardService.getGraficoCombo();
  }
}
