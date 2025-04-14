'use client'

import StatusDeSessao from '../components/StatusDeSessão'
import GerarQRCode from '../components/GerarQRCode'
import LogsDeSessao from '../components/LogsDeSessao'

export default function ControleDeSessoesWhatsAppContainer() {
  return (
    <div className="space-y-6 mt-10 animate-fadeIn">
      <StatusDeSessao />
      <GerarQRCode />
      <LogsDeSessao />
    </div>
  )
}