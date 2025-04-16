import { Injectable } from '@nestjs/common';
import { CreateFlowDto } from './dto/create-flow.dto';

type Flow = CreateFlowDto & { id: string };

@Injectable()
export class FlowsService {
  private flows: Flow[] = [];

  create(dto: CreateFlowDto) {
    const newFlow: Flow = { id: crypto.randomUUID(), ...dto };
    this.flows.push(newFlow);
    return newFlow;
  }

  findAll() {
    return this.flows;
  }
}
