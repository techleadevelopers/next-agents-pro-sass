'use client'

import { useState } from 'react'
import {
  ButtonExport,
  ProgressCircular,
  ChartContainer,
  SectionTitle,
} from '../../packages/ui/src'

export default function GerarRelatorio() {
  const [gerando, setGerando] = useState(false)
  const [sucesso, setSucesso] = useState(false)

  const handleGerarRelatorio = () => {
    setGerando(true)
    setSucesso(false)

    // Simulação da geração de relatório
    setTimeout(() => {
      setGerando(false)
      setSucesso(true)
    }, 2000)
  }

  return (
    <ChartContainer
      title="Gerar Relatório"
      subtitle="Exportação de dados IA personalizados"
    >
      <SectionTitle
        title="Geração de Relatórios IA"
        subtitle="Clique abaixo e aguarde o processamento do seu relatório"
      />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-6">
        <ButtonExport
          onClick={handleGerarRelatorio}
          disabled={gerando}
          className="transition-all"
        >
          {gerando ? 'Gerando...' : 'Gerar Relatório IA'}
        </ButtonExport>

        {gerando && <ProgressCircular value={30} size={60} label="Processando" />}


        {sucesso && !gerando && (
          <span className="text-green-400 text-sm animate-pulse">
            ✅ Relatório gerado com sucesso!
          </span>
        )}
      </div>
    </ChartContainer>
  )
}
