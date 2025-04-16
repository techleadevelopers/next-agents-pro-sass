// apps/api/src/modules/metrics/metrics.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { MetricasService } from './metrics.service';
import { GetMensagensPorPeriodoDto } from './dto/get-mensagens-periodo.dto';

@Controller('metricas')
export class MetricasController {
  constructor(private readonly metricasService: MetricasService) {}

  @Get('mensagens-por-periodo')
  mensagensPorPeriodo(@Query() query: GetMensagensPorPeriodoDto) {
    return this.metricasService.mensagensPorPeriodo(query.start, query.end);
  }
}
