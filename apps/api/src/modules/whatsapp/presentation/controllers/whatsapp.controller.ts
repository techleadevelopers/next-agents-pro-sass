import {
    Controller,
    Post,
    Get,
    Delete,
    Param,
    Body,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { SendMessageUseCase } from '../../application/use-cases/send-message.use-case';
  import { InitSessionUseCase } from '../../application/use-cases/init-session.use-case';
  import { DisconnectSessionUseCase } from '../../application/use-cases/disconnect-session.use-case';
  import { GetSessionStatusUseCase } from '../../application/use-cases/get-session-status.use-case';
  import { SendMessageDto } from '../../application/dto/send-message.dto';
  import { InitSessionDto } from '../../application/dto/init-session.dto';
  
  @Controller('whatsapp/:agentId')
  export class WhatsAppController {
    constructor(
      private readonly sendMessageUseCase: SendMessageUseCase,
      private readonly initSessionUseCase: InitSessionUseCase,
      private readonly disconnectSessionUseCase: DisconnectSessionUseCase,
      private readonly getSessionStatusUseCase: GetSessionStatusUseCase,
    ) {}
  
    @Post('send-message')
    @HttpCode(HttpStatus.OK)
    async sendMessage(
      @Param('agentId') agentId: string,
      @Body() body: SendMessageDto,
    ) {
      await this.sendMessageUseCase.execute(agentId, body);
      return { success: true, message: 'Mensagem enviada com sucesso.' };
    }
  
    @Post('sessions/init')
    async initSession(
      @Param('agentId') agentId: string,
      @Body() body: InitSessionDto,
    ) {
      const session = await this.initSessionUseCase.execute({
        agentId,
        tenantId: body.tenantId,
      });
  
      return {
        success: true,
        session,
      };
    }
  
    @Get('status')
    async getStatus(@Param('agentId') agentId: string) {
      const status = await this.getSessionStatusUseCase.execute(agentId);
      return {
        success: true,
        status,
      };
    }
  
    @Delete('sessions/:sessionId')
    async disconnect(@Param('sessionId') sessionId: string) {
      await this.disconnectSessionUseCase.execute(sessionId);
      return {
        success: true,
        message: 'Sessão encerrada com sucesso.',
      };
    }
  }
  