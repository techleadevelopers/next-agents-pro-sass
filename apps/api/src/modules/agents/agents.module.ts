import { Module } from '@nestjs/common';
import { AgentController } from './agents.controller';
import { AgentService } from './agents.service';
import { AgentRepository } from './agent.repository';
import { PrismaModule } from '../../prisma/prisma.module';
import { AgentLangchainService } from './langchain/agent-langchain.service';
import { EmbeddingsService } from './langchain/embeddings.service';

@Module({
  imports: [PrismaModule],
  controllers: [AgentController],
  providers: [
    AgentService,
    AgentRepository,
    AgentLangchainService,
    EmbeddingsService,
  ],
})
export class AgentModule {}
