import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Prisma
import { PrismaModule } from './prisma/prisma.module';

// Módulos principais da aplicação
import { AgentModule } from './modules/agents/agents.module';
import { MetricsModule } from './modules/metrics/metrics.module';
import { FinanceModule } from './modules/finance/finance.module';
import { TemplatesModule } from './modules/template/templates.module';
import { LogsModule } from './modules/logs/logs.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ReportsModule } from './modules/reports/reports.module';
import { IntegrationsModule } from './modules/integration/integrations.module';
import { WhatsAppModule } from './modules/whatsapp/whatsapp.module';

// Novos módulos
import { SupportModule } from './modules/support/support.module';
import { SettingsModule } from './modules/settings/settings.module';
import { FlowsModule } from './modules/flows/flows.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { VoiceModule } from './modules/voice/voice.module';           // ✅ novo
import { BillingModule } from './modules/billing/billing.module';     // ✅ novo
import { DebugModule } from './modules/debug/debug.module';

@Module({
  imports: [
    PrismaModule,
    AgentModule,
    MetricsModule,
    FinanceModule,
    TemplatesModule,
    LogsModule,
    DashboardModule,
    ReportsModule,
    IntegrationsModule,
    WhatsAppModule,
    SupportModule,
    SettingsModule,
    FlowsModule,
    AnalyticsModule,
    VoiceModule,   
    BillingModule,   
    DebugModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
