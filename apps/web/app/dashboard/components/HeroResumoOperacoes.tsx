'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/dashboard/ui/card';
import { Button } from '@/components/dashboard/ui/button';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';
import { Badge } from '@/components/dashboard/ui/badge';
import {
  Coins,
  Users,
  TrendingUp,
  LineChart,
  PlusCircle,
  Bell,
  Info,
  Sparkles,
  Zap,
  Activity,
} from 'lucide-react';
import CountUp from 'react-countup';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';


const HeroResumoOperacoes = () => {
  const [data, setData] = useState({
    faturamentoTotal: 192800,
    ganhoMesAtual: 28900,
    leadsCapturados: 354,
    conversao: 42,
    agentesAtivos: 8,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula delay de carregamento
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const KPIS = [
    {
      label: 'Faturamento Total',
      value: data.faturamentoTotal,
      prefix: 'R$ ',
      icon: Coins,
      tooltip: 'Receita bruta acumulada com agentes IA.',
    },
    {
      label: 'Ganho Mês Atual',
      value: data.ganhoMesAtual,
      prefix: 'R$ ',
      icon: TrendingUp,
      tooltip: 'Lucro estimado gerado este mês.',
      variacao: 12,
    },
    {
      label: 'Leads Capturados',
      value: data.leadsCapturados,
      icon: Users,
      tooltip: 'Leads únicos gerados por fluxos IA.',
    },
    {
      label: 'Conversão',
      value: data.conversao,
      suffix: '%',
      icon: LineChart,
      tooltip: 'Taxa de conversão de leads em clientes.',
    },
    {
      label: 'Agentes Ativos',
      value: data.agentesAtivos,
      icon: Sparkles,
      tooltip: 'Total de agentes IA operando no momento.',
    },
  ];

  const handleAlert = () => {
    // Ação futura de alerta ou modal
  };

  return (
    <TooltipProvider delayDuration={200}>
      <section className="space-y-6 animate-fadeIn">

        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bem-vindo, Agência XYZ
            </h1>
            <p className="text-muted-foreground text-sm">
              Aqui está o resumo das suas operações IA.
            </p>
            
          </div>

          <div className="flex gap-2">
            <Button variant="default" size="sm" onClick={handleAlert}>
              <PlusCircle className="w-4 h-4 mr-2" />
              Criar Novo Agente
            </Button>
            <Button variant="outline" size="sm">
              Ver Relatórios
            </Button>
          </div>
        </div>

        {/* Alerta de destaque */}
        <Alert className="border-blue-400/20 bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg shadow-md">
          <Bell className="w-5 h-5 text-primary" />
          <AlertTitle>Parabéns!</AlertTitle>
          <AlertDescription>
            Você teve um aumento de <span className="text-blue-400 font-bold">12%</span> nos resultados este mês. Continue alimentando os agentes com novos fluxos!
          </AlertDescription>
        </Alert>

       

        {/* KPIs */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {KPIS.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-accent/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md p-4 rounded-lg shadow-md animate-gradient-x h-full"
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {item.label}
                  </CardTitle>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-cyan-700 text-muted-foreground cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs max-w-[200px] leading-relaxed">
                      {item.tooltip}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col items-center justify-center gap-2 pt-2">
                  <item.icon className="w-6 h-6 text-primary" />

                  {loading ? (
                    <div className="h-8 w-24 rounded bg-gray-300 animate-pulse" />
                  ) : (
                    <div className="flex items-baseline gap-1 text-center">
                      <span className="text-muted-foreground text-base font-medium">
                        {item.prefix}
                      </span>
                      <CountUp
                        end={item.value}
                        duration={1.5}
                        separator="."
                        suffix={item.suffix || ''}
                        className="text-3xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-300/90 to-blue-600/50 bg-clip-text text-transparent"

                      />
                    </div>
                  )}

                  {item.variacao && (
                    <p className="text-xs text-emeral-300 animate-pulse font-semibold text-center">
                      ↑ {item.variacao}% desde o último mês
                    </p>
                  )}

                  <Badge className="mt-1 border-blue-500/5 text-blue-300">
                    Atualizado agora
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      

      </section>
    </TooltipProvider>
  );
};

export default HeroResumoOperacoes;
