// apps/api/src/modules/reports/reports.module.ts
import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ReportsService],
  controllers: [ReportsController],
})
export class ReportsModule {}
