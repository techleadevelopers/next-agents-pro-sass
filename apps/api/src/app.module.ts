import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AgentsModule } from './modules/agents/agents.module';


@Module({
  imports: [AgentsModule], // Aqui vão os modules caso tenha
  controllers: [AppController],
  providers: [AppService, PrismaService], // Registra o PrismaService
  exports: [PrismaService], // Exporta se outros modules precisarem
})
export class AppModule {}
