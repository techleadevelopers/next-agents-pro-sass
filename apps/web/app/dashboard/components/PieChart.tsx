'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/card'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexCharts.ApexOptions = {
  chart: {
    height: 350,
    type: 'donut',
    toolbar: {
      show: false,
    },
    background: 'transparent',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'bottom',
    labels: {
      colors: '#60a5fa',
      useSeriesColors: false,
    },
  },
  colors: ['#3b82f6', '#1e3a8a', '#60a5fa'],
  stroke: {
    show: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100],
    },
  },
}

const series = [44, 30, 26]

export default function GraficosPie() {
  return (
    <Card
      className="
        bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
        border border-blue-400/20
        backdrop-blur-md backdrop-saturate-150 p-4
        animate-fadeIn animate-gradient-x transition
      "
    >
      <CardHeader>
        <CardTitle
          className="
            text-1xl font-extrabold tracking-tight
            bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
          "
        >
          Distribuição Geral de Acessos
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="relative">
          <div className="absolute inset-0 animate-hud-lines pointer-events-none"></div>
          <Chart options={options} series={series} type="donut" height={300} />
        </div>
      </CardContent>
    </Card>
  )
}
