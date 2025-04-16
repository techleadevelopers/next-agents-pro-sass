// apps/api/src/modules/reports/reports.controller.ts
import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ExportarRelatorioDto } from './dto/exportar-relatorio.dto';

@Controller('relatorios')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('detalhados')
  getDetalhados(@Query('periodo') periodo?: string) {
    return this.reportsService.getRelatorioDetalhado(periodo);
  }

  @Post('exportar')
  exportar(@Body() dto: ExportarRelatorioDto) {
    return this.reportsService.exportarRelatorio(dto.tipo);
  }
}
