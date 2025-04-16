import { Injectable } from '@nestjs/common';
import { UpdateSettingsDto } from './dto/update-settings.dto';
import { UpdateToolsDto } from './dto/update-tools.dto';
import { UpdateVoiceDto } from './dto/update-voice.dto';

@Injectable()
export class IaConfigService {
  async get(agentId: string) {
    // Simula um fetch no banco
    return {
      agentId,
      language: 'pt-BR',
      promptBase: 'Você é um agente IA de suporte odontológico.',
      fallbackMessage: 'Desculpe, não entendi. Pode repetir?',
      tools: ['search', 'memory'],
      voice: { gender: 'female', speed: 1.0, enabled: true },
    };
  }

  async update(agentId: string, dto: UpdateSettingsDto) {
    console.log(`🧠 IA settings atualizados para agent ${agentId}`, dto);
    return { success: true };
  }

  async updateTools(agentId: string, dto: UpdateToolsDto) {
    console.log(`🔧 Tools IA atualizados para agent ${agentId}`, dto);
    return { success: true };
  }

  async updateVoice(agentId: string, dto: UpdateVoiceDto) {
    console.log(`🔊 Voz IA atualizada para agent ${agentId}`, dto);
    return { success: true };
  }
}
