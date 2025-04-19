'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/card';
import { ResponsiveChord } from '@nivo/chord';

const data = [
  // Matriz de conexões entre participantes (ordem deve bater com keys)
  [119, 80, 97, 48, 65],
  [47, 95, 61, 92, 47],
  [71, 49, 126, 52, 85],
  [47, 73, 66, 130, 64],
  [56, 60, 71, 58, 118],
];

const keys = ['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim'];

export default function GraficosPie() {
  return (
    <Card
      className="
        bg-gradient-to-br from-blue-500/10 via-blue-900/10 to-blue-400/10
        border border-blue-500/20
        backdrop-blur-md backdrop-saturate-150 p-4
        animate-fadeIn animate-gradient-x transition
      "
    >
      <CardHeader>
        <CardTitle
          className="
            text-1xl font-extrabold tracking-tight
            bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent
          "
        >
          Conexões entre Agentes e Fluxos
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="relative h-[400px] w-full">
          <div className="absolute inset-0 animate-hud-lines pointer-events-none z-10" />
          <ResponsiveChord
            data={data}
            keys={keys}
            margin={{ top: 50, right: 60, bottom: 90, left: 60 }}
            valueFormat=".2f"
            padAngle={0.03}
            innerRadiusRatio={0.92}
            innerRadiusOffset={0.02}
            colors={{ scheme: 'blue_green' }}
            arcBorderColor={{
              from: 'color',
              modifiers: [['darker', 0.8]],
            }}
            ribbonBorderColor={{
              from: 'color',
              modifiers: [['darker', 0.8]],
            }}
            activeRibbonOpacity={0.7}
            inactiveRibbonOpacity={0.15}
            inactiveArcOpacity={0.2}
            labelRotation={-90}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 2]],
            }}
            motionConfig="wobbly"
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                translateY: 70,
                itemWidth: 80,
                itemHeight: 14,
                itemTextColor: '#cbd5e1',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#ffffff',
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
