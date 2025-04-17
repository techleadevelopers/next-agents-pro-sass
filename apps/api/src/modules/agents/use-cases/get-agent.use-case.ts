import { AgentRepository } from '../agent.repository';

export class GetAgentUseCase {
  constructor(private repo: AgentRepository) {}

  async execute(id: string) {
    return this.repo.findById(id);
  }
}
