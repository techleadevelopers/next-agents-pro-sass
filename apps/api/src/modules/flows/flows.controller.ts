import { Controller, Post, Body, Get } from '@nestjs/common';
import { FlowsService } from './flows.service';
import { CreateFlowDto } from './dto/create-flow.dto';

@Controller('flows')
export class FlowsController {
  constructor(private readonly flowsService: FlowsService) {}

  @Post()
  create(@Body() dto: CreateFlowDto) {
    return this.flowsService.create(dto);
  }

  @Get()
  findAll() {
    return this.flowsService.findAll();
  }
}
