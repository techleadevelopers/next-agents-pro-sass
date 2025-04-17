import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateAgentDto & { tenantId: string }) {
    return this.prisma.agent.create({ data });
  }

  findAll() {
    return this.prisma.agent.findMany();
  }

  findById(id: string) {
    return this.prisma.agent.findUnique({ where: { id } });
  }

  findManyByTenant(tenantId: string) {
    return this.prisma.agent.findMany({ where: { tenantId } });
  }

  update(id: string, data: UpdateAgentDto) {
    return this.prisma.agent.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.agent.delete({ where: { id } });
  }
}
