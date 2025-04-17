// apps/api/src/modules/debug/debug.module.ts
import { Module } from '@nestjs/common';
import { DebugController } from './debug.controller';
import { DebugService } from './debug.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DebugController],
  providers: [DebugService],
})
export class DebugModule {}
