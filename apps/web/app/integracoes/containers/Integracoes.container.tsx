'use client'

import IntegraCRMs from '../components/IntegraCRMs'
import WebhooksCustomizados from '../components/WebhooksCustomizados'
import APIDocumentation from '../components/APIDocumentation'

export default function IntegracoesContainer() {
  return (
    <div className="space-y-8">
      <IntegraCRMs />
      <WebhooksCustomizados />
      <APIDocumentation />
    </div>
  )
}
