'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function StatusDeSessao() {
  return (
    <Card className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md animate-slideUp">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Status da Sessão WhatsApp</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-white text-lg font-bold">Sessão Ativa</p>
          <Badge variant="success">Ativo</Badge>
        </div>
      </CardContent>
    </Card>
  )
}