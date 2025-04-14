'use client'

import React from 'react'
import GestãoDeAgentesContainer from './containers/GestãoDeAgentes.container'

const GestãoDeAgentesPage = () => {
  return (
    <main className="min-h-screen w-full px-6 py-8 bg-neutral-950 text-neutral-100">
      <section className="max-w-6xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Gestão de HiperAgentes IA
          </h1>

          <p className="text-sm text-neutral-400">
            Crie, edite e gerencie seus agentes inteligentes com IA local.
          </p>
        </header>

        <GestãoDeAgentesContainer />
      </section>
    </main>
  )
}

export default GestãoDeAgentesPage
