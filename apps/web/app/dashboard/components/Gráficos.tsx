'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/card'
import dynamic from 'next/dynamic'

import { PieChart } from 'recharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexCharts.ApexOptions = {
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false,
    },
    background: 'transparent',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '50%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  grid: {
    show: true,
    borderColor: '#0ea5e9',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    labels: {
      rotate: -45,
      style: {
        colors: '#60a5fa',
        fontWeight: 600,
      },
    },
    categories: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    tickPlacement: 'on',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      text: 'Desempenho',
      style: {
        color: '#60a5fa',
        fontWeight: 600,
      },
    },
    labels: {
      style: {
        colors: '#60a5fa',
        fontWeight: 600,
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100],
    },
  },
  colors: ['#3b82f6', '#1e3a8a'],
}

const series = [
  {
    name: 'Desempenho',
    data: [80, 55, 90, 60, 70, 65, 85, 60, 75, 50, 68, 72],
  },
]

export default function Graficos() {
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
            text-2xl font-extrabold tracking-tight
            bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
          "
        >
          Desempenho dos Agentes IA
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="relative">
          <div className="absolute inset-0 animate-hud-lines pointer-events-none"></div>
          <Chart options={options} series={series} type="bar" height={300} />
        </div>
      </CardContent>
      
    </Card>
    
  )
}