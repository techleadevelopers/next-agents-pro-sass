'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/dashboard/ui/table'

import { Badge } from '@/components/dashboard/ui/badge'
import { Button } from '@/components/dashboard/ui/button'

const agentesDesempenho = [
  {
    nome: 'Agente B2B',
    tipo: 'Dev',
    conversas: 1245,
    tickets: 137,
    sucesso: '92%',
  },
  {
    nome: 'Agente Suporte',
    tipo: 'Suporte',
    conversas: 875,
    tickets: 58,
    sucesso: '85%',
  },
]

export default function TabelaDesempenho() {
  return (
    <div
      className="
        w-full overflow-x-auto rounded-lg 
        bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
        border border-blue-400/20 
        backdrop-blur-md backdrop-saturate-150 
        p-4 animate-fadeIn
      "
    >
      <Table>
        <TableHeader className="bg-blue-500/5 text-primary">
          <TableRow>
            <TableHead className="text-left px-4 py-2 border-b border-blue-400/30">
              Nome
            </TableHead>
            <TableHead className="text-left px-4 py-2 border-b border-blue-400/30">
              Tipo
            </TableHead>
            <TableHead className="text-left px-4 py-2 border-b border-blue-400/30">
              Conversas
            </TableHead>
            <TableHead className="text-left px-4 py-2 border-b border-blue-400/30">
              Tickets
            </TableHead>
            <TableHead className="text-left px-4 py-2 border-b border-blue-400/30">
              Sucesso
            </TableHead>
            <TableHead className="text-center px-4 py-2 border-b border-blue-400/30">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {agentesDesempenho.map((agente, index) => (
            <TableRow
              key={index}
              className="hover:bg-blue-500/5 transition border-b border-blue-400/20"
            >
              <TableCell
                className="
                  px-4 py-3 font-extrabold
                  bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                "
              >
                {agente.nome}
              </TableCell>

              <TableCell
                className="
                  px-4 py-3 capitalize font-extrabold
                  bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                "
              >
                {agente.tipo}
              </TableCell>

              <TableCell className="px-4 py-3 text-foreground">
                {agente.conversas}
              </TableCell>

              <TableCell className="px-4 py-3 text-foreground">
                {agente.tickets}
              </TableCell>

              <TableCell className="px-4 py-3">
                <Badge variant="success">{agente.sucesso}</Badge>
              </TableCell>

              <TableCell className="px-4 py-3 text-center">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-primary/50 hover:bg-accent/90 text-white font-bold transition duration-200 backdrop-blur-sm"
                >
                  Ver Detalhes
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
