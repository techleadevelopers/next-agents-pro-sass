'use client'

import KPIs from '../components/KPIs'
import Gráficos from '../components/Gráficos'
import TabelaDesempenho from '../components/TabelaDesempenho'
import GestãoDeAgentesContainer from '../../gestão-de-agentes/containers/GestãoDeAgentes.container'
import ControleDeSessoesWhatsAppContainer from '../../controle-de-sessoes-whatsapp/containers/ControleDeSessõesWhatsApp.container'

export default function DashboardGeralContainer() {
  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <KPIs />
      <Gráficos />
      <GestãoDeAgentesContainer />
      <TabelaDesempenho />
    </section>
  )
}
