import ControleDeSessoesWhatsAppContainer from '../controle-de-sessoes-whatsapp/containers/ControleDeSessõesWhatsApp.container'

export default function ControleDeSessoesPage() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground">
      <section className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Controle de Sessões WhatsApp
        </h1>

        <ControleDeSessoesWhatsAppContainer />
      </section>
    </main>
  )
}
