import { Injectable } from '@nestjs/common';
import { AgentRepository } from './agent.repository';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentService {
  constructor(private repo: AgentRepository) {}

  create(dto: CreateAgentDto, tenantId: string) {
    return this.repo.create({ ...dto, tenantId });
  }

  findAll(tenantId: string) {
    return this.repo.findManyByTenant(tenantId); // ✅ Atualizado
  }

  findOne(id: string) {
    return this.repo.findById(id);
  }

  update(id: string, dto: UpdateAgentDto) {
    return this.repo.update(id, dto);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
