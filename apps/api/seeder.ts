import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Iniciando seeder...');

  // Criar um cliente (tenant)
  const cliente = await prisma.cliente.create({
    data: {
      nome: 'Clínica Odonto Premium',
      status: 'ativo',
    },
  });

  console.log('👤 Cliente criado:', cliente.id);

  // Criar um agente IA
  const agente = await prisma.agent.create({
    data: {
      name: 'Agente IA Odonto',
      type: 'odontologia',
      phone: '5511999999999',
    },
  });

  console.log('🤖 Agente criado:', agente.id);

  // Criar uma sessão fake do WhatsApp
  const session = await prisma.whatsAppSession.create({
    data: {
      id: randomUUID(),
      agentId: agente.id,
      tenantId: cliente.id,
      status: 'CONNECTED',
      connectedAt: new Date(),
    },
  });

  console.log('💬 Sessão WhatsApp criada:', session.id);

  // Criar uma mensagem de exemplo
  await prisma.mensagem.create({
    data: {
      agentId: agente.id,
      content: 'Mensagem automática gerada pelo seeder ✅',
      date: new Date(),
    },
  });

  console.log('📩 Mensagem exemplo criada');

  // Imprimir bloco de teste .http
  console.log('\n🧪 Bloco de teste .http pronto pra colar no VSCode:\n');
  console.log(`### Iniciar sessão
POST http://localhost:3000/whatsapp/${agente.id}/sessions/init
Content-Type: application/json

{
  "tenantId": "${cliente.id}"
}

### Ver status
GET http://localhost:3000/whatsapp/${agente.id}/status

### Enviar mensagem
POST http://localhost:3000/whatsapp/${agente.id}/send-message
Content-Type: application/json

{
  "phone": "5511999999999",
  "message": "Mensagem via .http ⚡"
}
`);

  console.log('✅ Seeder finalizado com sucesso!');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('❌ Erro no seeder:', e);
  prisma.$disconnect();
  process.exit(1);
});
