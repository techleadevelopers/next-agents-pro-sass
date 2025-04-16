'use client'

import { ChartContainer, EmptyState } from '../../packages/ui/src'

export default function APIDocumentation() {
  return (
    <ChartContainer
      title="Documentação da API"
      subtitle="Referência para desenvolvedores integrarem com a IA"
    >
      <EmptyState
        title="Documentação disponível em breve"
        description="Estamos finalizando os endpoints e exemplos. Em breve, a documentação será liberada aqui."
      />
    </ChartContainer>
  )
}
