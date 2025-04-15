'use client';

import KPIs from '../components/KPIs';
import Gráficos from '../components/Gráficos';
import TabelaDesempenho from '../components/TabelaDesempenho';
import GestãoDeAgentesContainer from '../../gestão-de-agentes/containers/GestãoDeAgentes.container';
import ControleDeSessoesWhatsAppContainer from '../../controle-de-sessoes-whatsapp/containers/ControleDeSessõesWhatsApp.container';
import DashboardResultadosFinanceiros from '../components/DashboardResultadosFinanceiros';
import PieChart from '../components/PieChart';
import HeroResumoOperacoes from '../components/HeroResumoOperacoes';

export default function DashboardGeralContainer() {
  return (
    <section className="w-[95em] mx-auto p-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Coluna principal */}
      <div className="lg:col-span-3 space-y-8">
        <HeroResumoOperacoes />
        <GestãoDeAgentesContainer />
        <TabelaDesempenho />
        <Gráficos />
        <KPIs />
      </div>

      {/* Coluna lateral com o PieChart */}
      <aside className="  p-4" >
        <PieChart />
      </aside>
    </section>
  );
}