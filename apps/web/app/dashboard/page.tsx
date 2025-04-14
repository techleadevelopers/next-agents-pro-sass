'use client'

import React from 'react'
import NavbarWhatsApp from '../controle-de-sessoes-whatsapp/components/NavbarWhatsApp'
import DashboardGeralContainer from './containers/Dashboard Geral.container'
import ControleDeSessoesWhatsAppContainer from '../controle-de-sessoes-whatsapp/containers/ControleDeSessõesWhatsApp.container'

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex">


  {/* Sidebar Left Menu */}
  <NavbarWhatsApp />



      {/* Conteúdo Dashboard */}
      <section className="flex-1 p-8 bg-background text-foreground">
        <div className="max-w-7xl mx-auto space-y-8">

          <header className="space-y-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight animate-fadeIn bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dashboard NexAgent-Pro
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed text-balance">
              Painel de gerenciamento dos HyperAgentes IA locais com automação via WhatsApp.
            </p>
          </header>

          <div className="animate-fadeIn delay-100">
            <DashboardGeralContainer />
          </div>

        </div>
      </section>

     

    </main>
  )
}
