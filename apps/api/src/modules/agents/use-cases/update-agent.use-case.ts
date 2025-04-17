import { UpdateAgentDto } from '../dto/update-agent.dto';
import { AgentRepository } from '../agent.repository';

export class UpdateAgentUseCase {
  constructor(private repo: AgentRepository) {}

  async execute(id: string, dto: UpdateAgentDto) {
    return this.repo.update(id, dto);
  }
}
