// apps/api/src/modules/debug/debug.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { DebugService } from './debug.service';

@Controller('debug')
export class DebugController {
  constructor(private readonly service: DebugService) {}

  @Get('agents/:id/status')
  checkAgentStatus(@Param('id') id: string) {
    return this.service.verifyAgentStatus(id);
  }

  @Get('whatsapp/:agentId/connection')
  checkWhatsAppConnection(@Param('agentId') agentId: string) {
    return this.service.verifyWhatsApp(agentId);
  }

  @Get('langchain/:agentId')
  checkLangchain(@Param('agentId') agentId: string) {
    return this.service.verifyLangchainConfig(agentId);
  }
}
