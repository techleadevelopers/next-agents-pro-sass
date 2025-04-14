'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'

const data = [
  { nome: 'Dev', desempenho: 80, sucesso: 65 },
  { nome: 'Suporte', desempenho: 55, sucesso: 50 },
  { nome: 'B2B', desempenho: 90, sucesso: 75 },
  { nome: 'Marketing', desempenho: 60, sucesso: 40 },
]

// Cores Fixas do Theme
const primaryColor = '#3b82f6' // Azul
const accentColor = '#8b5cf6'  // Roxo

export default function Graficos() {
  return (
    <Card className="
      bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
      border border-blue-400/20
      backdrop-blur-md backdrop-saturate-150 p-4
      animate-fadeIn transition
    ">
      <CardHeader>
        <CardTitle className="
          text-2xl font-extrabold tracking-tight
          bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
        ">
          Desempenho dos Agentes IA
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3b82f680" />
            <XAxis dataKey="nome" stroke="#3b82f6" />
            <YAxis stroke="#3b82f6" />
            <Tooltip />
            <Legend />

            <defs>
              <linearGradient id="gradientMeta" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4682b4" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#87ceeb" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4682b4" stopOpacity="0.15" />
              </linearGradient>

              <linearGradient id="gradientReal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a288a" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#1682b4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1a289a" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            <Bar
              dataKey="desempenho"
              fill="url(#gradientMeta)"
              radius={[4, 4, 0, 0]}
              isAnimationActive
              animationDuration={800}
              animationEasing="ease-out"
            />
            <Bar
              dataKey="sucesso"
              fill="url(#gradientReal)"
              radius={[4, 4, 0, 0]}
              isAnimationActive
              animationDuration={800}
              animationEasing="ease-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
