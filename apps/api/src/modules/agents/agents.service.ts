import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateAgentDto) {
    return this.prisma.agent.create({ data });
  }

  findAll() {
    return this.prisma.agent.findMany();
  }

  findOne(id: string) {
    return this.prisma.agent.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateAgentDto) {
    return this.prisma.agent.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.agent.delete({ where: { id } });
  }
}
