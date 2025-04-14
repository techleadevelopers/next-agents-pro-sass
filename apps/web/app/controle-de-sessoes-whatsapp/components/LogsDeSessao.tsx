// app/controle-de-sessoes-whatsapp/components/LogsDeSessao.tsx

'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function LogsDeSessao() {
  return (
    <Card className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md animate-slideUp delay-200">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Logs da Sessão</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white">Última conexão: 13/04/2025 - 16:34</p>
      </CardContent>
    </Card>
  )
}
