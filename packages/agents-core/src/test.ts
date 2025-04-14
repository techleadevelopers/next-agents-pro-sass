import { askAgent } from './index'

async function test() {
  const resposta = await askAgent('agent-sales', 'formas de pagamento')
  console.log('Resposta:', resposta)
}

test()
