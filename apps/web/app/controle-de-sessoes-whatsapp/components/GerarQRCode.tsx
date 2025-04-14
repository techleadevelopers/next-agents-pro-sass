// app/controle-de-sessoes-whatsapp/components/GerarQRCode.tsx

'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function GerarQRCode() {
  return (
    <Card className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md animate-slideUp delay-100">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gerar QR Code</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="bg-primary/50 hover:bg-accent/90 text-white py-2 px-4 rounded backdrop-blur-sm transition-all">Gerar QR Code</Button>
      </CardContent>
    </Card>
  )
}
