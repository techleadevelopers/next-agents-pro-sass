import { AgentRepository } from '../agent.repository';

export class DeleteAgentUseCase {
  constructor(private repo: AgentRepository) {}

  async execute(id: string) {
    return this.repo.delete(id);
  }
}
