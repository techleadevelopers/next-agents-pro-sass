// agents/factories/agent-default-settings.factory.ts
import { Settings } from '@prisma/client';

export function createDefaultSettings(agentId: string): Omit<Settings, 'id' | 'createdAt' | 'updatedAt'> {
  return {
    agentId,
    language: 'pt-BR',
    promptBase: 'Você é um assistente virtual especializado no nicho do cliente.',
    fallbackMessage: 'Desculpe, não consegui entender. Pode reformular?',
    tools: ['memory', 'calculator'],
    voiceGender: 'female',
    voiceSpeed: 1.0,
    voiceEnabled: false,
  };
}
