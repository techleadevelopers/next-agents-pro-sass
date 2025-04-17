
# 🧠 Roadmap Técnico Completo do Backend – NextAgent-Pro

Plataforma SaaS White-label com IA Local, WhatsApp SDK, Arquitetura Clean e Suporte Multi-Tenant via Prisma ORM + NestJS.

---

## ⚙️ Estrutura Geral do Backend

apps/ └── api/ ├── main.ts # Bootstrap principal ├── app.module.ts # Módulo raiz ├── prisma/ # PrismaService e Config ORM ├── shared/ # Interceptors, Pipes, Decorators ├── auth/ # Login, JWT, Guards └── modules/ # Módulos por domínio DDD

yaml
Copiar
Editar

---

## 🧩 Módulos por Domínio (camada /modules)

| Módulo        | Pasta              | Finalidade                                                                  |
|---------------|--------------------|-----------------------------------------------------------------------------|
| agents        | agents/            | Gestão de HiperAgentes IA personalizados por nicho                         |
| whatsapp      | whatsapp/          | Sessões, envio de mensagem, QR e conexão com Baileys                       |
| finance       | finance/           | Pagamentos, Faturas, KPIs financeiros (MRR, churn, upsell)                |
| metrics       | metrics/           | Métricas de performance IA                                                 |
| templates     | templates/         | Biblioteca de fluxos IA prontos                                            |
| settings      | settings/          | Configurações IA por agente (voz, idioma, fallback, tools)                |
| logs          | logs/              | Histórico de interações, mensagens e erros da IA                           |
| dashboard     | dashboard/         | Combinação de KPIs visuais                                                 |
| integrations  | integrations/      | Webhooks, CRMs e ERPs externos                                             |
| support       | support/           | Central de ajuda (FAQ, vídeos)                                             |
| reports       | reports/           | Geração e exportação de relatórios                                         |
| debug         | debug/             | Diagnóstico de agentes, IA e WhatsApp                                      |
| flows         | flows/             | (Planejado) Builder IA drag & drop                                         |
| voice         | voice/             | (Futuro) Integração com TTS / STT                                          |
| billing       | billing/           | (Futuro) Planos, assinaturas, cobrança integrada                           |
| analytics     | analytics/         | (Futuro) Análise de comportamento IA e usuários                            |

---

## 🔌 Endpoints REST (por módulo)

### 📦 Agents
- `GET /agents` — Lista agentes
- `POST /agents` — Cria novo agente
- `GET /agents/:id` — Detalhes do agente
- `PATCH /agents/:id` — Atualiza agente
- `DELETE /agents/:id` — Remove agente

---

### 📲 WhatsApp
- `POST /whatsapp/:agentId/send-message`
- `POST /whatsapp/:agentId/sessions/init`
- `GET /whatsapp/:agentId/status`
- `GET /whatsapp/:agentId/sessions`
- `DELETE /whatsapp/:agentId/sessions/:sessionId`

---

### 💰 Financeiro
- `GET /financeiro/historico?start=...&end=...`
- `GET /financeiro/mrr?periodo=mensal`
- `GET /financeiro/retencao-churn`
- `GET /financeiro/upsell`
- `GET /financeiro/kpis`
- `GET /financeiro/faturas`

---

### 🧠 IA LangChain
- `POST /ia/ask-to-agent`
- `POST /ia/flow/:agentId/start` *(planejado)*
- `POST /ia/flow/:agentId/continue` *(planejado)*

---

### 📈 Métricas
- `GET /metricas/mensagens-por-periodo`
- `GET /metricas/conversao-por-agente`
- `GET /metricas/evolucao-uso`

---

### 🧾 Logs
- `GET /logs?agentId=...`
- `GET /logs/:logId`
- `DELETE /logs/:logId`

---

### ⚙️ Settings
- `GET /settings/:agentId`
- `PATCH /settings/:agentId`
- `PATCH /settings/:agentId/tools`
- `PATCH /settings/:agentId/voice`

---

### 🧪 Debug
- `GET /debug/agents/:id/status`
- `GET /debug/langchain/:agentId`
- `GET /debug/whatsapp/:agentId/connection`

---

## 🧬 Prisma ORM – Modelos Relacionais

| Modelo              | Descrição                                               |
|---------------------|----------------------------------------------------------|
| Agent               | Agente IA vinculado a tenant                             |
| Cliente             | Tenant master                                            |
| Pagamento           | Registro financeiro avulso                               |
| FaturaMensal        | Fatura consolidada por mês                               |
| KpiFinance          | MRR, churn, upsell e receita                             |
| Upsell              | Vendas extras (upgrade de plano)                         |
| Assinatura          | Assinatura de plano SaaS                                 |
| Plano               | Plano SaaS disponível (Básico, Pro, White-label)         |
| Mensagem            | Mensagens trocadas no WhatsApp                           |
| WhatsAppSession     | Sessões de conexão com status                            |
| DocumentoTreinado   | Arquivo enviado para embedding IA                        |
| VetorDocumento      | Chunks vetorizados (LangChain/Ollama)                    |
| Settings            | Configuração IA (voz, idioma, fallback, tools)           |
| Log                 | Histórico de IA (mensagens, erros, eventos)              |
| Faq                 | Perguntas frequentes (suporte)                           |
| VideoTutorial       | Conteúdo em vídeo (suporte IA)                           |
| Template            | Fluxos IA reutilizáveis por categoria                    |

---

## 🔐 Multi-Tenant

- `x-tenant-id` no header obrigatório em todas as rotas privadas
- Prisma filtra via: `{ where: { tenantId } }`
- Decorator `@CurrentTenant()` para extrair o tenantId direto
- `TenantInterceptor` injeta automaticamente

---

## ⚙️ Shared Layer (apps/api/src/shared)

| Tipo        | Arquivo                      | Função                                                        |
|-------------|------------------------------|---------------------------------------------------------------|
| Decorator   | `current-tenant.decorator.ts`| Injeta tenantId do header                                     |
| Decorator   | `public.decorator.ts`        | Define rota pública sem JWT                                   |
| Interceptor | `tenant.interceptor.ts`      | Injeta tenantId nas requisições automaticamente               |
| Pipe        | `parse-date.pipe.ts`         | Converte query string de data para `Date`                     |
| Guard       | `jwt-auth.guard.ts`          | Valida JWT do usuário                                         |

---

## 🔗 Integrações e Tecnologias

| Stack          | Lib / Tool         | Uso principal                                      |
|----------------|--------------------|----------------------------------------------------|
| ORM            | Prisma ORM         | Models, Migrations, Multi-Tenant                   |
| DB             | PostgreSQL         | Banco relacional                                   |
| LangChain      | LangChain.js       | Agentes IA locais, memória, embeddings             |
| IA Local       | Ollama             | Rodar LLMs no servidor (Phi, Mistral, TinyLlama)  |
| WhatsApp SDK   | Baileys            | Envio/recebimento de mensagens, sessão, status     |
| Queue          | BullMQ (futuro)    | Envio assíncrono de mensagens                      |
| DevOps         | TurboRepo + GitHub | Monorepo, CI/CD, Lint, Deploy                      |

---

## 🔁 Fluxo de Execução

```ts
POST /whatsapp/:agentId/send-message

↓ WhatsAppController
↓ WhatsAppService
↓ LangChainStrategy (agents-core)
↓ WhatsAppClient (Baileys SDK)
↓ Queue opcional (BullMQ)
↓ JSON Response
✅ Padrões Arquiteturais
✅ Clean Architecture (domain, infra, use-case separados)

✅ DDD (cada módulo é um bounded context)

✅ CQRS (leitura e escrita separadas em alguns domínios)

✅ Multi-Tenant isolado por header

✅ DTOs para entrada/saída clara entre camadas

✅ Interceptors, Guards, Decorators para controle fino

📚 Próximos Módulos Planejados

Módulo	Status	Descrição
flows	Planejado	FlowBuilder visual IA (drag & drop)
analytics	Planejado	Comportamento IA + visualizações
billing	Futuro	Integração com gateways de pagamento
voice	Futuro	TTS / STT via IA de voz
notifications	Futuro	Histórico de eventos, alertas IA
🚀 Conclusão
O backend do NextAgent-Pro oferece uma fundação sólida para produtos SaaS com IA local, automações via WhatsApp, total isolamento por tenant, integração com dados reais, e pronto para escalar.

✅ Clean Architecture
✅ Multi-Tenant com Prisma
✅ IA Local via LangChain/Ollama
✅ Sessões WhatsApp em tempo real
✅ Modular, testável e pronto pra White-label
Desenvolvido por:
Paulo Silas de Campos Filho
TechLead @ NextAgent-Pro




<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


 Módulo whatsapp (DDD + Clean)
pgsql
Copiar
Editar
apps/
└── api/
    └── src/
        └── modules/
            └── whatsapp/
                ├── domain/
                │   ├── entities/
                │   │   └── whatsapp-session.entity.ts
                │   ├── repositories/
                │   │   └── whatsapp.repository.ts
                │   └── value-objects/
                │       └── whatsapp-status.vo.ts
                │
                ├── application/
                │   ├── use-cases/
                │   │   ├── send-message.use-case.ts
                │   │   ├── init-session.use-case.ts
                │   │   ├── disconnect-session.use-case.ts
                │   │   └── get-session-status.use-case.ts
                │   └── dto/
                │       ├── send-message.dto.ts
                │       ├── init-session.dto.ts
                │       └── session-status.dto.ts
                │
                ├── infrastructure/
                │   ├── database/
                │   │   ├── prisma/
                │   │   │   └── whatsapp.prisma.ts
                │   │   └── whatsapp.repository.impl.ts
                │   ├── client/
                │   │   └── baileys.client.ts
                │   ├── gateways/
                │   │   └── whatsapp.gateway.ts  # (WebSocket - Status em tempo real)
                │   └── queue/
                │       └── whatsapp.queue.ts     # Worker BullMQ (envio assíncrono)
                │
                ├── presentation/
                │   ├── controllers/
                │   │   └── whatsapp.controller.ts
                │   └── routes/
                │       └── whatsapp.routes.ts
                │
                └── config/
                    └── whatsapp.config.ts
🔍 Explicação Modular

Pasta/Arquivo	Descrição
domain/entities/whatsapp-session.entity.ts	Entidade representando uma sessão WhatsApp (número, status, agentId, tenantId, etc).
domain/repositories/	Abstração da persistência para sessões e logs (interface).
domain/value-objects/	Representações imutáveis como status (CONNECTED, DISCONNECTED, LOADING_QR, etc).
application/use-cases/	Casos de uso encapsulando lógica como "iniciar sessão", "enviar mensagem", "desconectar".
application/dto/	Tipagens e validações para entrada e saída nos use-cases.
infrastructure/client/baileys.client.ts	Wrapper para SDK Baileys, gerencia instâncias, QR Codes, envio e recepção.
infrastructure/queue/	Sistema de filas com BullMQ para envio assíncrono de mensagens.
infrastructure/gateways/whatsapp.gateway.ts	WebSocket para push status (QR Code, eventos de mensagem, status de sessão).
infrastructure/database/prisma/	Schema e repository real implementando a interface do domínio.
presentation/controllers/whatsapp.controller.ts	Controller REST integrando com use-cases.
config/whatsapp.config.ts	Configs como timeout de sessão, max conexões, logs, paths.
🌐 Endpoints (REST) - Já Alinhados com Estrutura

Verbo	Rota	Caso de uso
POST	/whatsapp/:agentId/send-message	send-message.use-case.ts
POST	/whatsapp/:agentId/sessions/init	init-session.use-case.ts
DELETE	/whatsapp/:agentId/sessions/:sessionId	disconnect-session.use-case.ts
GET	/whatsapp/:agentId/status	get-session-status.use-case.ts
GET	/debug/whatsapp/:agentId/connection	Diagnóstico de sessão (baileys.client.ts)
🔁 Fluxo de Envio de Mensagens via Baileys (Async com IA)
User envia mensagem para um número → /send-message

API chama SendMessageUseCase

UseCase envia mensagem para fila (BullMQ)

Worker (whatsapp.queue.ts) consome a fila e chama baileys.client.ts

Cliente WhatsApp envia a mensagem

Log e status da entrega são salvos via repositório

Resposta é enviada de volta ao frontend via Socket Gateway

🎯 Alinhamento com Estratégia SaaS

Requisito	Como a estrutura cobre
Multi-Tenant	Toda entidade e sessão carrega tenantId, agentId como chave obrigatória
Independência de APIs	Integração via Baileys SDK (open-source, local)
Gerenciamento IA por Nicho	Toda sessão WhatsApp está atrelada a um HiperAgente
Painel Futurista (HUD Sci-Fi)	A comunicação em tempo real via whatsapp.gateway.ts alimenta status, QR Code e ações de controle no frontend
Alta escalabilidade	Baileys é stateless, e a orquestração é feita por filas com workers isolados
Logs + Métricas	Cada mensagem, sessão e erro pode ser logado na tabela de logs, alimentando o módulo metrics/
✅ Próximos Arquivos a Codar (sugestão de ordem)
whatsapp-session.entity.ts (entidade base)

init-session.use-case.ts + baileys.client.ts

whatsapp.controller.ts com endpoint de /sessions/init

whatsapp.gateway.ts para emitir QR code por socket

send-message.use-case.ts + whatsapp.queue.ts

Repositórios + Prisma Model

🔥 Quer que eu comece a gerar os arquivos?
Posso já te entregar:

 whatsapp-session.entity.ts

 init-session.use-case.ts

 baileys.client.ts

 whatsapp.controller.ts

Ou prefere que eu siga algum outro caminho?

Me fala o que você prefere: começar pela base das entidades e casos de uso ou já ir direto para o fluxo funcional de sessão e envio de mensagem.


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
