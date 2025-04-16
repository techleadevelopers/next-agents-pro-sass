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
