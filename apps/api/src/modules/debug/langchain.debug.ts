// apps/api/src/modules/agents/langchain.debug.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Verifica a configuração LangChain de um agente IA.
 * @param agentId ID do agente
 * @returns Relatório de diagnóstico
 */
export async function debugLangchainConfig(agentId: string) {
  const settings = await prisma.settings.findUnique({
    where: { agentId },
  });

  if (!settings) {
    return {
      status: '⚠️ Configuração não encontrada',
      agenteId: agentId,
      langchainReady: false,
    };
  }

  const relatorio = {
    agenteId: agentId,
    langchainReady: Boolean(settings.promptBase && settings.fallbackMessage),
    promptBase: settings.promptBase || '❌ Não definido',
    fallback: settings.fallbackMessage || '❌ Não definido',
    idioma: settings.language || 'pt-BR',
    ferramentasAtivas: settings.tools?.length || 0,
    vozAtivada: settings.voiceEnabled ? '🎤 Sim' : '🔇 Não',
  };

  return relatorio;
}
