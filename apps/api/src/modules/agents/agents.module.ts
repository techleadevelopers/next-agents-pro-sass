import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsController } from './agents.controller';
import { PrismaModule } from '../../prisma/prisma.module'; // Caminho correto!

@Module({
  imports: [PrismaModule],
  controllers: [AgentsController],
  providers: [AgentsService],
})
export class AgentsModule {}
