This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
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

File	Finalidade
api.ts	Funções Auxiliares API Rest
constants.ts	Constantes Globais do Projeto
Resultado Final do Mapeamento
→ O NextAgent-Pro possui:


Camada	Total Aproximado	Observação
Componentes Globais UI	16	Alta Reutilização UX
Charts Locais	8	Gráficos Específicos Nivo / Visx
Componentes Locais	60+	Componentes Únicos de Contexto
Utils Globais	2	Helpers API / Constantes