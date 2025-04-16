
# 🚀 NextAgent-Pro

> Plataforma SaaS White-label | HiperAgentes IA Multi-Tenant | WhatsApp Automation | DevOps Clean Architecture | IA Local

Automatize o atendimento da sua empresa com IA própria, reduza custos com APIs pagas e escale seu suporte via WhatsApp com um painel futurista de controle.

💡 Resultados:
- 70% redução nos atendimentos manuais via WhatsApp
- Atendimento IA 24/7 customizado por nicho
- Agentes IA treinados para seu negócio

## 📖 Descrição do Projeto

O **NextAgent-Pro** é uma plataforma brutalmente poderosa desenvolvida para criação, gestão e integração de **HiperAgentes IA** especializados em nichos específicos de mercado, tais como:

- Clínicas Odontológicas
- Hospitais
- Restaurantes
- Imobiliárias
- Academias
- E-commerce
- Varejo / Atendimento B2C

🎯 Casos de Uso — Por Nicho de Mercado
 Nicho	Resultados Esperados

 - Clínicas e Hospitais	Redução de 70% nos atendimentos manuais via WhatsApp
 - Restaurantes	Cardápio automatizado + pedidos via IA
 - Imobiliárias	Pré-venda e qualificação de leads IA
 - Academias	Gestão de alunos, envio de treinos personalizados
 - E-commerce	Respostas rápidas, suporte 24/7 e Upsell IA
 - Serviços	Atendimento automatizado e follow-up inteligente

⚡ Em 30 segundos — O que o NextAgent-Pro resolve?
Automatize o atendimento e processos da sua empresa via WhatsApp com agentes IA ultra personalizados, independentes de APIs pagas, com controle total dos dados e uma experiência premium focada em nichos.

 - Criação de Agentes IA em minutos
 - Gestão Multi-Tenant de clientes
 - Integração real com WhatsApp
 - IA Local: performance e economia
 - UX brutal Sci-Fi Dev Premium

🎯 Para Quem é o NextAgent-Pro?
O NextAgent-Pro é ideal para:

Público-alvo	Benefício direto

 - Consultorias e Agências de Marketing	Criar e revender Agentes IA sob medida para clientes
 - Empresas de Atendimento ao Cliente	Reduzir custos operacionais com IA local 24/7
 - Startups SaaS White-label	Criar seu próprio produto IA com marca própria
 - Clínicas, Restaurantes, Imobiliárias, E-commerce	Atendimento automatizado via WhatsApp com personalização extrema
 - Modelos de Monetização (SaaS)
O NextAgent-Pro foi desenhado para operar como SaaS Multi-Tenant com planos escaláveis:

Plano	Público	Recursos

 - Básico	Pequenas empresas	1 Agente IA
 - Profissional	Empresas em crescimento	Até 5 Agentes IA
 - White-label	Agências e Revendedores	Plataforma 100% customizável

📢 Estratégia Comercial Inicial (Go-to-Market)

Sugerimos um lançamento estratégico com foco em:
Criação de Landing Page comercial do produto
Vídeo de Demonstração do Painel HUD Sci-Fi
Parcerias com Agências Digitais / Consultorias
Abordagem via Cold Email focada em nicho
Presença em Marketplaces SaaS (ex: Product Hunt, AppSumo)
Demonstração personalizada para leads estratégicos

📚 Demonstração Visual
Em breve vídeo demonstrativo oficial do Painel HUD Sci-Fi.

Enquanto isso:
Screenshots atualizadas estão disponíveis em: /public/screenshots
Vídeo Demo (WIP) será publicado em: youtube.com/@nextagent-pro (placeholder)



🌍 Versão em Inglês
O NextAgent-Pro está disponível em Português 🇧🇷
Planejamos uma versão internacional completa em Inglês 🇺🇸 para próximos releases.

A plataforma possibilita a criação de agentes inteligentes locais, personalizados e autossustentáveis, sem dependências externas (APIs pagas), com infraestrutura robusta para escalar operações automatizadas via WhatsApp.
Desenvolvido com arquitetura limpa, escalável e profissional, o projeto visa fornecer uma base sólida para construção de sistemas SaaS de alto nível com IA local, integrações reais e ambiente multi-tenant seguro.

A plataforma oferece:

- API Backend robusta desenvolvida em NestJS
- Banco de dados relacional PostgreSQL gerenciado via Prisma ORM
- Engine IA local customizada com LangChain + Ollama AI
- Treinamento de Modelos por Nicho de Mercado (fine-tune local / embeddings customizados)
- Gerenciamento de Contexto, Logs e Memória Conversacional via LangChain
- Criação e Orquestração de Fluxos Inteligentes por Agente
- Integração com WhatsApp Business via SDK Baileys (envio/recebimento de mensagens em tempo real)
- Suporte para Mensagens de Texto, Imagens, Arquivos, Botões e Listagens no WhatsApp
- Arquitetura SaaS Clean Architecture / DDD / CQRS preparada para Multi-Tenant
- Estrutura Monorepo Profissional com TurboRepo
- Modularização por Packages reutilizáveis
- Estrutura de Engine IA desacoplada para integração com múltiplas fontes de dados (APIs externas, CRMs, ERPs)
- SDK Customizado WhatsApp com gerenciamento de Sessões e Multi-Instância
- Camada de Configuração por Cliente com Templates Pré-configurados de Fluxo IA
- Painel Frontend Next.js (HUD Sci-Fi Dev Premium) 100% responsivo e já operacional.
- UX moderna e responsiva orientada para DevOps e Automação Empresarial
- Escalabilidade horizontal preparada para ambientes Cloud / Cluster Kubernetes

---

## Architect Clean & DDD 

🧠 Visão Geral da Arquitetura
ruby
Copiar
Editar
apps/
└── api/
    └── src/
        ├── main.ts                      # Bootstrap da aplicação NestJS
        ├── app.module.ts                # Módulo raiz: importa todos os módulos globais
        ├── app.service.ts               # Serviço global se necessário
        ├── prisma/                      # Prisma Service (singleton para database)
        ├── shared/                      # Pipes, Guards, Interceptors, Decorators
        └── modules/                     # Todos os domínios (módulos) do sistema
📦 Módulos por Domínio (camada /modules/)

Módulo	Pasta	Responsabilidade

 - agents	modules/agents/	CRUD de HiperAgentes IA. Possui estratégias IA (LangChain).
 - metrics	modules/metrics/	KPIs, métricas SaaS, performance IA.
 - finance	modules/finance/	MRR, upsells, pagamentos, planos.
 - templates	modules/templates/	Templates IA, reuso de fluxos e loja IA.
 - whatsapp	modules/whatsapp/	Sessões Baileys, envio/recebimento, QR, status.
 - settings	modules/settings/	Configs de linguagem, IA tools, voz.
 - support	modules/support/	FAQ, vídeos tutoriais, suporte IA.
 - logs	modules/logs/	Histórico de interações IA. Logs explicáveis.
 - dashboard	modules/dashboard/	Painel financeiro e indicadores visuais.
 - reports	modules/reports/	Exportação, geração de relatórios.
 - integrations	modules/integrations/	Webhooks, APIs externas, CRMs.
 - flows	modules/flows/	(Planejado) FlowBuilder Drag-and-Drop.
 - analytics	modules/analytics/	(Planejado) Comportamento do usuário e IA avançada.
 - voice	modules/voice/	(Futuro) TTS/STT com voz real-time.
 - auth	modules/auth/	Login, JWT, guards, autenticação de usuário.

🌍 Lógica Global de Comunicação (camada API)

Tipo	Responsabilidade

 - REST API	Controllers NestJS responsáveis por rotas HTTP REST.
 - WebSocket	Gateway de WhatsApp e status real-time (ex: whatsapp.gateway.ts).
 - Fila Assíncrona (BullMQ)	Envio assíncrono de mensagens, uso de whatsapp.queue.ts.
 - LangChain Engine (agents-core)	Estratégias IA, prompts dinâmicos, ferramentas IA.

🧩 Shared Layer
apps/api/src/shared/
Contém:

 - Guards → JwtAuthGuard, RolesGuard, etc.

 - Interceptors → Transformar respostas, logs de execuções.

 - Pipes → Validação global de DTOs.

 - Decorators → Decoradores custom (ex: @CurrentUser()).

🧬 Integrações Externas

Integração	Lib	Descrição

 - WhatsApp SDK	Baileys	Sessão multi-instância via WebSocket.
 - Prisma ORM	@prisma/client	Data Layer multi-tenant PostgreSQL.
 - LangChain	agents-core	IA Local com LangChain/Ollama
 - Voice IA	(TTS/STT)	Futuro, integração com voz IA.
 - Webhooks	REST Webhooks + queue	Integração com ERPs, CRMs.

🔐 Auth Flow (auth/)

auth/
├── dto/
├── guards/        -> JwtAuthGuard
├── strategies/    -> JwtStrategy
├── auth.controller.ts
├── auth.service.ts
Responsável por login via JWT, proteção de rotas com @UseGuards, e integração futura com RBAC.

📊 Database (Prisma ORM)
Multi-tenant: Cliente, Agente, Sessão, Mensagem, Logs, etc.

 - Models com @relation, @index, @updatedAt, etc.
 - Settings, Faq, Upsell, KpiMetric, WhatsAppSession

⚙️ DevOps + Estrutura de Projeto

Pasta	Descrição
infra/terraform	Infraestrutura como código

 - packages/	SDKs reutilizáveis (ex: whatsapp-sdk, agents-core)
 - apps/web/	Painel HUD Sci-Fi com Next.js
 - apps/api/	Backend NestJS organizado por domínios
 - devops/github/workflows/	CI/CD (Deploy Dev, Migrate DB, Lint/Test)

🚀 Pipeline de Execução API

Request HTTP (ex: POST /whatsapp/:agentId/send-message)
     ↓
[Controller] whatsapp.controller.ts
     ↓
[Service] whatsapp.service.ts
     ↓
[UseCase] send-message.use-case.ts
     ↓
[Client/SDK] baileys.client.ts
     ↓
[Queue Opcional] BullMQ → whatsapp.queue.ts
     ↓
Resposta JSON
✅ Padrões e Convenções

Padrão	Uso

 - DDD	Domain Driven Design (Entity, Repository, VO)
 - Clean Architecture	Separação de domínio e infraestrutura
 - CQRS (Opcional)	Separação de leitura/gravação
 - DTOs	Contrato claro entre camadas
 - Prisma	ORM com tipagem forte e migrations
 - TurboRepo	Monorepo moderno, pacotes reutilizáveis
 - Decorators NestJS	Para segurança e extração de contexto

📌 Checklist de Modularização SaaS
✅ Multi-Tenant Cliente, Agent, Session
✅ Agente IA com LangChain + Contexto
✅ WhatsApp SDK local com Baileys
✅ IA Settings por Agente (Settings)
✅ Métricas, MRR, Upsell → finance/, metrics/
✅ Logs com histórico detalhado
✅ FlowBuilder planejado
✅ Auth + JWT guard
✅ Integração futura com Voice, Training, Analytics
│
├── web/                         # Frontend Next.js HUD
│   ├── app/
│   │   ├── gestao-de-agentes/
│   │   │   ├── ListaDeAgentes.tsx
│   │   │   ├── CriarNovoAgente.tsx
│   │   │   ├── api.ts           # Conecta com /agents do backend
│   │   │   └── hooks.ts
│   │   ├── metricas-avancadas/
│   │   ├── historico-de-conversas/
│   │   ├── templates-de-fluxo-ia/
│   │   ├── loja-templates-ia/
│   │   ├── relatorios/
│   │   ├── financeiro/
│   │   ├── kpis-saas/
│   │   ├── configuracoes-avancadas-ia/
│   │   ├── suporte-central-ajuda/
│   │   ├── controle-de-sessoes-whatsapp/
│   │   └── integracoes/
│   ├── components/
│   │   ├── global/              # ChartContainer, ChartLoader, etc.
│   │   └── charts/              # DonutChartIA, LineChartCustom etc.
│   └── utils/                   # api.ts, constants.ts
│
├── packages/
│   ├── agents-core/             # IA local com LangChain/Ollama
│   ├── database/                # Prisma ORM schema + client
│   ├── whatsapp-sdk/            # SDK customizado com Baileys
│   ├── shared-lib/              # Tipos globais + helpers
│   └── ui/                      # Componentes visuais reutilizáveis


🔌 Endpoints REST Ativos (Principais)
📦 Agents
GET /agents

POST /agents

GET /agents/:id

PATCH /agents/:id

DELETE /agents/:id

🤖 IA / LangChain
GET /ia/ask?q=...

POST /ia/ask-to-agent

POST /ia/flow/:agentId/start

POST /ia/flow/:agentId/continue

📲 WhatsApp SDK (Baileys)
POST /whatsapp/:agentId/send-message

GET /whatsapp/:agentId/sessions

POST /whatsapp/:agentId/sessions/init

DELETE /whatsapp/:agentId/sessions/:sessionId

GET /whatsapp/:agentId/status

📊 Logs
GET /logs?agentId=xxx

GET /logs/:logId

DELETE /logs/:logId

⚙️ Settings IA
GET /settings/:agentId

PATCH /settings/:agentId

PATCH /settings/:agentId/tools

PATCH /settings/:agentId/voice

🧪 Debug
GET /debug/agents/:id/status

GET /debug/whatsapp/:agentId/connection

GET /debug/langchain/:agentId




## Tecnologias Usadas

A stack tecnológica do `next-agent-pro` foi pensada para performance, organização profissional e flexibilidade em integrações IA.

### Backend
- TypeScript
- NestJS Arquitetura Modular / Clean
- Prisma ORM Data Layer
- PostgreSQL Banco Relacional
- LangChain Framework de IA Local / Conversational Memory / Tools
- Ollama AI LLM Local Engine — TinyLlama, Phi, Mistral, entre outros modelos custom
- Baileys SDK WhatsApp Client API
- CQRS Pattern Separação de leitura/gravação de dados
- DDD - Domain Driven Design

### Engine IA / Processamento Inteligente
- LangChain Agents (Orquestração IA e Prompting Dinâmico)
- Ollama Local Models
- Suporte a treinamento de embeddings personalizados por nicho
- Memory Management (Cache IA / Context Awareness / Logs)

🔌 API Backend — Endpoints Disponíveis (REST API)
Endpoints REST da plataforma NextAgent-Pro — Backend NestJS (SaaS Multi-Tenant com HiperAgentes IA)

📦 Agents — Gestão Completa de HiperAgentes IA

GET /agents — Lista todos os agentes cadastrados
POST /agents — Cria um novo agente IA com nome, nicho e configurações base
GET /agents/:id — Retorna os detalhes completos de um agente específico
PATCH /agents/:id — Atualiza informações do agente (nome, contexto, ativa/desativa)
DELETE /agents/:id — Remove um agente IA do sistema

🧠 IA — Processamento Inteligente (Perguntas & Fluxos)
GET /ia/ask?q=... — Pergunta rápida ao agente padrão (via query)
POST /ia/ask-to-agent — Envia pergunta para agente específico com histórico/contexto
POST /ia/flow/:agentId/start — Inicia um fluxo inteligente do agente IA por ID
POST /ia/flow/:agentId/continue — Envia resposta do usuário e continua fluxo IA

📲 WhatsApp — Integração com Baileys SDK (Envio, Sessões e Status)

POST /whatsapp/:agentId/send-message — Envia mensagem para um número via agente WhatsApp
GET /whatsapp/:agentId/sessions — Lista sessões ativas vinculadas ao agente
POST /whatsapp/:agentId/sessions/init — Inicializa nova sessão WhatsApp (login via QR Code)
DELETE /whatsapp/:agentId/sessions/:sessionId — Encerra sessão específica de WhatsApp
GET /whatsapp/:agentId/status — Verifica status atual da conexão do WhatsApp

🧾 Logs — Histórico Completo de Conversas IA

GET /logs?agentId=:id — Lista logs recentes de interações IA do agente
GET /logs/:logId — Consulta um log específico com detalhes da conversa
DELETE /logs/:logId — Remove um histórico específico do sistema

⚙️ Settings — Configurações Avançadas de Comportamento IA

GET /settings/:agentId — Consulta as configurações atuais do agente
PATCH /settings/:agentId — Atualiza opções como mensagens automáticas, idioma, fallback
PATCH /settings/:agentId/tools — Configura ferramentas IA extras (buscas, cálculo, memória)
PATCH /settings/:agentId/voice — Define configurações de voz IA (voz ativa, gênero, velocidade)

🧪 Testes & Debug — Utilitários Internos de Diagnóstico IA

GET /debug/agents/:id/status — Verifica status e integridade do agente IA
GET /debug/whatsapp/:agentId/connection — Diagnóstico da conexão WhatsApp
GET /debug/langchain/:agentId — Valida configuração LangChain do agente IA



### Frontend 
- Next.js (React Framework)
- TailwindCSS (Design System Modular)
- Shadcn/UI (Componentes UI Modernos)
- Radix UI (Componentes Acessíveis)
- API REST / WebSocket IA Streaming para comunicação com Backend
- Interface White-label Customizável

## 🌐 Estrutura do Frontend (apps/web)

O painel Web do NextAgent-Pro está sendo desenvolvido com foco total em usabilidade, performance e design brutal Sci-Fi / HUD Dev Premium.

Framework utilizado:
- Next.js (React Framework)
- TailwindCSS (Design System Modular)
- Shadcn/UI e Radix UI (Componentes modernos e acessíveis)
- Integração via API REST e WebSocket Streaming IA com backend NestJS

Estrutura das Pastas:

nextagent-pro/
├── apps/
│   ├── api/              -> Backend NestJS
│   └── web/              -> Frontend Next.js (Painel de Controle HUD Sci-Fi)
├── packages/
│   ├── database/         -> Prisma ORM e Schema
│   ├── agents-core/      -> Engine IA LangChain/Ollama
│   ├── whatsapp-sdk/     -> Integração WhatsApp (Baileys SDK)
│   └── shared-lib/       -> Tipos Globais e Utils Compartilhados
├── infra/                -> Infraestrutura como Código (Terraform, IaC)
└── tsconfig.base.json    -> Configuração global TS


O painel Frontend permite a criação, gestão e análise dos HiperAgentes IA, integrando funcionalidades avançadas como:

- Dashboard de Performance
- Controle Multi-Tenant de Agentes IA
- Gestão de Sessões WhatsApp
- Visualização de Logs e Métricas
- Criação de Agentes Customizados
- UI Futurista Sci-Fi / HUD brutal



### Infraestrutura & DevOps
- TurboRepo (Monorepo Management)
- Docker / Docker Compose (Ambientes de Deploy)
- GitHub Actions (CI/CD Automatizado)
- ESLint / Prettier / Husky / Lint Staged (Code Quality)
- .env Management por ambiente / cliente
- Arquitetura SaaS Multi-Tenant
- Clean Architecture com separação absoluta de Domínios / Casos de Uso / Adapters / Infra

---

## 🧠 Módulos Planejados e Expansíveis

A plataforma NextAgent-Pro foi desenhada para ser extensível e modular, permitindo a adição de novos domínios estratégicos:

- Módulo de Analytics e Relatórios Inteligentes por Agente IA
- Criação Visual de Fluxos via Builder IA (Drag & Drop)
- Gestão de Usuários e Permissões Multi-Tenant
- Módulo de Integração com CRMs / ERPs / APIs Externas
- Templates de Agentes Prontos para Vários Nichos
- Webhooks e Integrações Inteligentes Customizadas
- Dashboard Financeiro com Análise de Receita / KPI's Avançados
- Monitoramento em Tempo Real das Sessões WhatsApp
- Logs IA Explicáveis com Contexto Detalhado

## 🔐 Segurança e Compliance

O NextAgent-Pro segue padrões de segurança modernos para garantir privacidade e integridade dos dados:

- Criptografia de dados sensíveis em repouso e em trânsito
- Isolamento Multi-Tenant total por Cliente
- Gestão de Secrets via .env seguro e Vaults
- Logs com controle de acesso
- Preparado para LGPD / GDPR / Compliance Corporativo


## Infraestrutura como Código (IaC) — Clean Architecture | Multi-Tenant | DevOps Moderno
Powered by Terraform | GitHub Actions | Arquitetura Modular Cloud-Ready

Visão Geral
Este diretório infra/ contém toda a infraestrutura como código (IaC) do projeto NexAgent-Pro, focado na criação, manutenção e automação de ambientes de Cloud Computing de forma moderna, segura e escalável.

A arquitetura foi desenhada para atender múltiplos ambientes (Dev / Staging / Prod), suportar múltiplos clientes (multi-tenant) e permitir total automação via CI/CD.

Tecnologias Utilizadas

Terraform	Provisionamento de infraestrutura
AWS / Render / Railway	Provedor Cloud (a ser definido)
GitHub Actions	Automação DevOps CI/CD
PostgreSQL	Banco de dados gerenciado
Prisma ORM	Migrations automatizadas via pipeline

📦 Mapa Completo dos Componentes NextAgent-Pro
1. Componentes Globais (@nextagent-pro/ui)
Esses ficam em packages/ui/ e são usados em todo o projeto:


Componente Global	Função Principal
ChartContainer.tsx	Wrapper Visual Gráficos Sci-Fi
ChartLoader.tsx	Skeleton Loader Gráfico HUD
DataTableCustom.tsx	Tabela Avançada Multi-Level
KPIChartCard.tsx	Card KPI Financeiro Visual
ProgressCircular.tsx	Loader Circular Futurista
SectionTitle.tsx	Título Global Sci-Fi com Badge
SegmentedControl.tsx	Filtros Visuais UX
TabsAnimated.tsx	Abas Navegação Animadas
ButtonExport.tsx	Botão Exportação CSV/PDF
BadgeStatus.tsx	Badge Status Operacional IA
ROIChart.tsx	Chart ROI (Nivo Bump)
ExportDropdown.tsx	Dropdown Exportação Multi-formato
AccordionCustom.tsx	FAQ Interativo UI
CardVideo.tsx	Card para Exibição de Vídeos
EmptyState.tsx	Estado Vazio Visual UX
StatisticCard.tsx	Card Numérico Resumido UI
2. Charts Específicos (charts/)
Esses charts são usados de forma específica em cada módulo:


Chart File	Descrição Chart
BarChartCustom.tsx	Bar Chart Horizontal Customizado
DonutChartIA.tsx	Donut Chart IA Status
FlowSankeyChart.tsx	Sankey Chart Automação IA
HeatmapConversas.tsx	Heatmap Visx Logs de Conversa
LineChartCustom.tsx	Line Chart Multi-Series Custom
PieChartFinanceiro.tsx	Pie Chart Financeiro Mix
TimelineChart.tsx	Timeline Chart Logs Conversas
3. Componentes Locais por Módulo (App)
app/configuracoes-gerais/

Componentes Locais
ConfiguracoesMultiTenant.tsx
SalvarAlteracoes.tsx
app/controle-de-sessoes-whatsapp/

Componentes Locais
GerarQRCode.tsx
LogsDeSessao.tsx
NavbarWhatsApp.tsx
StatusDeSessao.tsx
app/dashboard/

Componentes Locais
DashboardResultadosFinanceiros.tsx
Graficos.tsx
HeroResumoOperacoes.tsx
KPIs.tsx
Navbar.tsx
NavbarDashboard.tsx
PieChart.tsx
TabelaDesempenho.tsx
app/gestao-de-agentes/

Componentes Locais
CriarNovoAgente.tsx
EditarAgente.tsx
ListaDeAgentes.tsx
app/historico-de-conversas/

Componentes Locais
FiltrarLogs.tsx
LogsDeConversas.tsx
app/metricas-avancadas/

Componentes Locais
GraficoMensagensPorPeriodo.tsx
PerformancePorAgente.tsx
TabelaKPIConversao.tsx
app/permissoes-e-usuarios/

Componentes Locais
EditarUsuario.tsx
TelaDeCriacaoDeUsuario.tsx
app/relatorios/

Componentes Locais
GerarRelatorio.tsx
RelatoriosDetalhados.tsx
app/templates-de-fluxo-ia/

Componentes Locais
AdicionarTemplate.tsx
BibliotecaDeTemplates.tsx
app/loja-templates-ia/

Componentes Locais
CardTemplateIA.tsx
DetalhesTemplate.tsx
ComprarTemplate.tsx
app/integracoes/

Componentes Locais
IntegraCRMs.tsx
WebhooksCustomizados.tsx
APIDocumentation.tsx
app/configuracoes-avancadas-ia/

Componentes Locais
EditarTomDeVoz.tsx
UploadDocsTreinamento.tsx
RegrasAutomacaoPorNicho.tsx
app/financeiro/

Componentes Locais
MeusPlanosAtuais.tsx
HistoricoDePagamentos.tsx
UpgradeDowngradePlano.tsx
app/kpis-saas/

Componentes Locais
MRRChart.tsx
RetencaoChurn.tsx
UpsellMetrics.tsx
app/suporte-central-ajuda/

Componentes Locais
FAQInterativo.tsx
ChatSuporteIA.tsx
VideoTutoriais.tsx

4. Utils Globais (utils/)
api.ts	Funções Auxiliares API Rest
constants.ts	Constantes Globais do Projeto



Componentes Globais UI	16	Alta Reutilização UX
Charts Locais	8	Gráficos Específicos Nivo / Visx
Componentes Locais	60+	Componentes Únicos de Contexto
Utils Globais	2	Helpers API / Constantes


Estrutura de Pastas
infra/
├── terraform/               # Infraestrutura principal
│   ├── main.tf              # Entrada principal Terraform
│   ├── variables.tf         # Variáveis globais do projeto
│   ├── outputs.tf           # Outputs globais
│   ├── providers.tf         # Configurações dos Providers Cloud
│   │
│   ├── dev/                 # Configurações ambiente DEV
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── backend.tf       # State remoto S3 / Terraform Cloud
│   │
│   ├── prod/                # Configurações ambiente PROD
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── backend.tf
│   │
│   └── modules/             # Infraestrutura Modularizada
│       ├── vpc/             # Rede privada Virtual (VPC)
│       ├── database/        # PostgreSQL RDS / Railway
│       ├── k8s/             # Cluster Kubernetes (opcional)
│       ├── s3/              # Storage S3 Buckets
│       ├── networking/      # DNS / Load Balancer / Cloudflare
│       └── iam/             # Políticas e Roles AWS
│
└── README.md                # Documentação completa Infraestrutura

Lógica de Cada Módulo
Módulo	Finalidade	Descrição
vpc/	Rede Privada	Criação de VPC, Subnets, Gateways, NAT
database/	PostgreSQL Cloud	Criação de banco gerenciado, backup, alta disponibilidade
k8s/	Kubernetes Cluster	Criação de cluster EKS ou equivalente (futuro)
s3/	Storage Objects	Buckets públicos e privados para assets, uploads
networking/	DNS	Configuração de domínios, SSL, Load Balancers
iam/	Segurança Cloud	Controle de acessos, roles, policies AWS
Pipelines DevOps CI/CD
Esses pipelines estão configurados dentro de:

devops/github/workflows/
├── ci.yml              # Build, Test, Lint
├── deploy-dev.yml      # Deploy Automático Ambiente DEV
├── deploy-prod.yml     # Deploy Ambiente PROD com Aprovação Manual
├── db-migrate.yml      # Executa Prisma Migrate no banco

Próximos Passos DevOps
Etapa	Descrição	Status
Provisionamento Cloud	Criar infra base via Terraform	Em progresso
Configuração State Remoto	S3 Bucket / Terraform Cloud	Em breve
Deploy Automático DEV	GitHub Actions + Auto Deploy	Em breve
Pipeline DB Migrate	Prisma + Migrations Auto	Em breve
Cluster Kubernetes	Optional	Futuro
Execução Terraform

# Inicializa o Terraform
cd infra/terraform/dev
terraform init

# Planeja alterações
terraform plan

# Aplica na nuvem
terraform apply
Documentação Relacionada
Documentação Terraform
GitHub Actions Docs
AWS Docs
Railway Docs
Render Docs

Observações Finais

Este ambiente de infraestrutura foi desenhado para:
Alta Escalabilidade SaaS
Baixo Custo Inicial (Cloud híbrido/local)
Modularidade extrema
Pronto para Multi-Tenant
DevOps Pipeline Ultra Moderno
Total integração com NexAgent-Pro HyperAgents IA

>>>>>>> Stashed changes
## Integrações Futuras Planejadas

O projeto está preparado para expansão e integração com:

- APIs externas (Google Calendar, CRMs, ERPs)
- Gateways de Pagamento (MercadoPago, Stripe, PagSeguro)
- Integração com Sistemas de Gestão (hospitalar, odontológico, educacional)
- Engine IA com OpenAI GPT (fallback API)
- Frontend Web SaaS para Criação de Agentes via Painel Gráfico
- Webhooks Inteligentes para Sistemas Legados
- Módulo de Analytics / Logs Avançados por Agente
- Módulo de Multi-Idiomas IA
- Sistema de Templates IA Prontos por Nicho

---

Esse modelo de arquitetura ultra modular foi desenhado para suportar a criação de milhares de HiperAgentes IA totalmente independentes, personalizáveis e especializados em rotinas automatizadas via WhatsApp.

Ideal para:  
→ Startups SaaS  
→ White-Label IA Products  
→ Automação Empresarial  
→ Consultorias IA  
→ Projetos de Integração Inteligente via API  
→ Prestação de Serviços de Agentes IA por Assinatura  



## 🏆 Diferenciais Competitivos do NextAgent-Pro

- IA Local Personalizada e Autossustentável
- Infraestrutura Multi-Tenant Modular de Alto Nível
- Integração Real com WhatsApp via SDK Open Source
- Painel Frontend Sci-Fi / HUD Premium Dev Experience
- Custo Reduzido sem Dependência de APIs Externas
- Escalabilidade Cloud-Ready com Terraform e Kubernetes
- Arquitetura Clean Architecture | DDD | CQRS
- Totalmente Extensível e White-Label



## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nextagent-pro.git

# Instale as dependências
npm install

# Gere os clients Prisma
cd packages/database/prisma
npx prisma generate

# Execute o backend
cd ../../apps/api
npm run start:dev
```

# Execute o frontend (Painel HUD Sci-Fi)
cd apps/web
npm run dev


## Uso

Exemplos de endpoints disponíveis:

http
GET /agents
POST /agents
PATCH /agents/:id
DELETE /agents/:id

GET /ia/ask?q=Sua Pergunta
POST /whatsapp/:agentId/send-message

## Estrutura do Projeto


nextagent-pro/
├── apps/
│   └── api/             -> Backend NestJS
├── packages/
│   ├── database/        -> Prisma ORM e Schema
│   ├── agents-core/     -> Engine IA LangChain/Ollama
│   ├── whatsapp-sdk/    -> Integração WhatsApp
│   └── shared-lib/      -> Tipos Globais e Utils
└── tsconfig.base.json   -> Configuração global TS
```

# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

cd my-turborepo
pnpm build


### Develop

To develop all apps and packages, run the following command:


cd my-turborepo
pnpm dev


### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/docs/reference/configuration)
- [CLI Usage](https://turbo.build/docs/reference/command-line-reference)

## Roadmap

- [x] Backend CRUD Agents
- [x] Integração Prisma ORM
- [x] Engine IA LangChain/Ollama
- [x] Integração WhatsApp SDK
- [x] Criação do Frontend Next.js HUD
- [x] Dashboard Multi-Tenant
- [ ] Deploy Cloud Infra




## Contribuição

1. Fork o projeto
2. Crie sua branch: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: nova feature'`
4. Push para a branch: `git push origin minha-feature`
5. Crie um Pull Request

## Licença

MIT License

## Conexões e Recursos

- Documentação Oficial NestJS: https://docs.nestjs.com
- Prisma ORM: https://www.prisma.io
- LangChain: https://www.langchain.com
- Ollama AI: https://ollama.com
- Baileys SDK: https://github.com/adiwajshing/Baileys

---

Feito com 💻 por Paulo Silas de Campos Filho | TechLead @NextAgent-Pro

