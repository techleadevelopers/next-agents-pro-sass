import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { AgentService } from './agents.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Request } from 'express';

@Controller('agents')
export class AgentController {
  constructor(private readonly service: AgentService) {}

  @Post()
  create(@Body() dto: CreateAgentDto, @Req() req: Request) {
    const tenantId = req.tenantId;
    if (!tenantId) throw new BadRequestException('Tenant ID ausente');
    return this.service.create(dto, tenantId);
  }

  @Get()
  findAll(@Req() req: Request) {
    const tenantId = req.tenantId;
    if (!tenantId) throw new BadRequestException('Tenant ID ausente');
    return this.service.findAll(tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAgentDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
