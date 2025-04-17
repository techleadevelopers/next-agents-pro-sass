import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

const TENANTS = [
  { nome: 'Clínica Odonto Premium', status: 'ativo' },
  { nome: 'Restaurante Chef AI', status: 'ativo' },
  { nome: 'Imobiliária VaptVupt', status: 'trial' },
];

async function main() {
  console.log('🔄 Iniciando seeder multi-tenant...\n');

  for (const tenantData of TENANTS) {
    // Criar Cliente
    const cliente = await prisma.cliente.create({ data: tenantData });
    console.log(`👤 Cliente criado: ${cliente.nome} (${cliente.id})`);

    for (let i = 1; i <= 2; i++) {
      const agente = await prisma.agent.create({
        data: {
          name: `Agente IA ${i} - ${cliente.nome}`,
          type: i === 1 ? 'atendimento' : 'vendas',
          phone: `55${Math.floor(Math.random() * 10000000000)}`,
          tenantId: cliente.id,
        },
      });

      console.log(`🤖 Agente criado: ${agente.name} (${agente.id})`);

      // Criar sessão WhatsApp fake
      const session = await prisma.whatsAppSession.create({
        data: {
          id: randomUUID(),
          agentId: agente.id,
          tenantId: cliente.id,
          status: 'CONNECTED',
          connectedAt: new Date(),
        },
      });

      // Criar documento de treinamento simulado
      const doc = await prisma.documentoTreinado.create({
        data: {
          agentId: agente.id,
          tenantId: cliente.id,
          filename: `treinamento_${i}.pdf`,
          mimetype: 'application/pdf',
          tamanho: 1024,
          origem: 'pdf',
          conteudo: `Simulação de conteúdo de PDF para ${agente.name}`,
        },
      });

      // Criar vetores fake
      await prisma.vetorDocumento.createMany({
        data: Array.from({ length: 3 }).map((_, index) => ({
          documentoId: doc.id,
          conteudoChunk: `Chunk ${index + 1} do agente ${agente.name}`,
          embedding: Buffer.from(Uint8Array.from({ length: 8 }, () => Math.floor(Math.random() * 256))),
          ordem: index + 1,
        })),
      });

      // Criar mensagem automática
      await prisma.mensagem.create({
        data: {
          agentId: agente.id,
          content: `Mensagem automática gerada pelo seeder para ${agente.name}`,
          date: new Date(),
        },
      });

      console.log(`📄 Doc + 📦 Vetores + 💬 Mensagem criados para ${agente.name}\n`);
    }
  }

  console.log('✅ Seeder finalizado com sucesso!');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('❌ Erro no seeder:', e);
  prisma.$disconnect();
  process.exit(1);
});
