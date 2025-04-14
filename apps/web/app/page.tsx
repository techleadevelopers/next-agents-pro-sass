export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        NexAgent-Pro
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Plataforma para criação, gestão e automação de HyperAgentes IA.
        Solução White-label, poderosa, rápida e brutal.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/dashboard"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition"
        >
          Acessar Dashboard
        </a>
      </div>
    </main>
  )
}
