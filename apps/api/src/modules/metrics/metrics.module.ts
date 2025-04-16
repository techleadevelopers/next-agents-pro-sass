import { Module } from '@nestjs/common';
import { MetricasService } from './metrics.service';
import { MetricasController } from './metrics.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MetricasController],
  providers: [MetricasService],
})
export class MetricsModule {}
