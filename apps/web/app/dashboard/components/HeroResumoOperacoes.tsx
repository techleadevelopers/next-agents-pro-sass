import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/card';
import { Button } from '@/components/dashboard/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/dashboard/ui/badge';
import { Coins, Users, TrendingUp, LineChart, PlusCircle, Bell } from 'lucide-react';
import CountUp from 'react-countup';

const HeroResumoOperacoes = () => {
  const [data, setData] = useState({
    faturamentoTotal: 192800,
    ganhoMesAtual: 28900,
    leadsCapturados: 354,
    conversao: 42,
  });

  useEffect(() => {
    // Carregar dados de API ou banco de dados
  }, []);

  const handleAlert = () => {
    // Implementar lógica para alertas e notificações
  };

  return (
    <section className="space-y-6 animate-fadeIn">
      {/* Saudação + Avisos Inteligentes */}
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
            <PlusCircle className="w-4 h-4 mr-2" /> Criar Novo Agente
          </Button>
          <Button variant="outline" size="sm">
            Ver Relatórios
          </Button>
        </div>
      </div>

      <Alert className="border-blue-400/20 bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg shadow-md">
        <Bell className="w-5 h-5 text-primary" />
        <AlertTitle>Parabéns!</AlertTitle>
        <AlertDescription>
          Você teve um aumento de <span className="text-green-400 font-bold">12%</span> nos resultados este mês.
        </AlertDescription>
      </Alert>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Faturamento Total', value: data.faturamentoTotal, prefix: 'R$ ', icon: Coins },
          { label: 'Ganho Mês Atual', value: data.ganhoMesAtual, prefix: 'R$ ', icon: TrendingUp },
          { label: 'Leads Capturados', value: data.leadsCapturados, prefix: '', icon: Users },
          { label: 'Conversão', value: data.conversao, prefix: '', suffix: '%', icon: LineChart },
        ].map((item, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x"
          >
            <CardHeader>
              <CardTitle className="text-sm font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <item.icon className="w-6 h-6 text-primary" />
                <div className="bg-gray-800 p-2 rounded-lg">
                  <span className="text-white">{item.prefix}</span>
                  <CountUp
                    end={item.value}
                    duration={2.2}
                    separator="."
                    prefix=""
                    suffix={item.suffix}
                    className="text-3xl font-extrabold text-white"
                  />
                </div>
              </div>
              <div className="mt-2">
                <Badge className="border-green-500/5 text-green-300">
                  Atualizado agora
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HeroResumoOperacoes;
