import { AgentRepository } from '../agent.repository';

export class ListAgentsUseCase {
  constructor(private repo: AgentRepository) {}

  async execute(tenantId: string) {
    return this.repo.findManyByTenant(tenantId);
  }
}
