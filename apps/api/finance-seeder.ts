import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Iniciando seeder financeiro...');

  // Criar cliente
  const cliente = await prisma.cliente.create({
    data: {
      nome: 'Academia HyperFit',
      status: 'ativo',
    },
  });

  console.log('👤 Cliente criado:', cliente.id);

  // Criar pagamentos simulados
  const pagamentos = await prisma.pagamento.createMany({
    data: [
      {
        clienteId: cliente.id,
        valor: 199.99,
        date: new Date('2025-04-01'),
      },
      {
        clienteId: cliente.id,
        valor: 299.99,
        date: new Date('2025-04-10'),
      },
      {
        clienteId: cliente.id,
        valor: 149.99,
        date: new Date('2025-04-15'),
      },
    ],
  });

  console.log(`💰 ${pagamentos.count} pagamentos criados`);

  // Criar upsell
  const upsell = await prisma.upsell.create({
    data: {
      produto: 'Consultoria IA Avançada',
      valor: 499.0,
    },
  });

  console.log('📈 Upsell criado:', upsell.id);

  // Bloco de teste .http
  console.log('\n🧪 Bloco .http de testes financeiros:\n');

  console.log(`### Listar Pagamentos
GET http://localhost:3000/finance/pagamentos?clienteId=${cliente.id}

### Criar novo pagamento
POST http://localhost:3000/finance/pagamentos
Content-Type: application/json

{
  "clienteId": "${cliente.id}",
  "valor": 399.00,
  "date": "2025-04-20T00:00:00.000Z"
}

### Listar Upsells
GET http://localhost:3000/finance/upsells

### Criar Upsell
POST http://localhost:3000/finance/upsells
Content-Type: application/json

{
  "produto": "Plano Premium IA + Voz",
  "valor": 799.00
}
`);

  await prisma.$disconnect();
  console.log('✅ Seeder financeiro finalizado!');
}

main().catch((e) => {
  console.error('❌ Erro no seeder financeiro:', e);
  prisma.$disconnect();
  process.exit(1);
});
