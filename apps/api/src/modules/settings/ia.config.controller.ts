import {
    Controller,
    Get,
    Patch,
    Param,
    Body,
  } from '@nestjs/common';
  import { IaConfigService } from './ia.config.service';
  import { UpdateSettingsDto } from './dto/update-settings.dto';
  import { UpdateToolsDto } from './dto/update-tools.dto';
  import { UpdateVoiceDto } from './dto/update-voice.dto';
  
  @Controller('settings/:agentId')
  export class IaConfigController {
    constructor(private readonly iaConfigService: IaConfigService) {}
  
    @Get()
    get(@Param('agentId') agentId: string) {
      return this.iaConfigService.get(agentId);
    }
  
    @Patch()
    update(@Param('agentId') agentId: string, @Body() dto: UpdateSettingsDto) {
      return this.iaConfigService.update(agentId, dto);
    }
  
    @Patch('tools')
    updateTools(@Param('agentId') agentId: string, @Body() dto: UpdateToolsDto) {
      return this.iaConfigService.updateTools(agentId, dto);
    }
  
    @Patch('voice')
    updateVoice(@Param('agentId') agentId: string, @Body() dto: UpdateVoiceDto) {
      return this.iaConfigService.updateVoice(agentId, dto);
    }
  }
  