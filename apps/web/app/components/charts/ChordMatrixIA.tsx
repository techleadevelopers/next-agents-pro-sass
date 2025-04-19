'use client';

import React from 'react';
import { Arc } from '@visx/shape';
import { Group } from '@visx/group';
import { Chord, Ribbon } from '@visx/chord';
import { scaleOrdinal } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/card';

const blueDark = '#1e3a8a';
const blue = '#3b82f6';
const blueLight = '#60a5fa';
const blueBright = '#93c5fd';
const neon = '#00ddc6';

const matrix = [
  [11975, 5871, 8916, 2868],
  [1951, 10048, 2060, 6171],
  [8010, 16145, 8090, 8045],
  [1013, 990, 940, 6907],
];

const descending = (a: number, b: number): number => (b < a ? -1 : b > a ? 1 : 0);

const colorScale = scaleOrdinal<number, string>({
  domain: [0, 1, 2, 3],
  range: ['url(#grad1)', 'url(#grad2)', 'url(#grad3)', 'url(#grad4)'],
});

interface ChordMatrixIAProps {
  width: number;
  height: number;
}

export default function ChordMatrixIA({ width, height }: ChordMatrixIAProps) {
  if (width < 10) return null;

  const centerSize = 20;
  const outerRadius = Math.min(width, height) * 0.5 - (centerSize + 10);
  const innerRadius = outerRadius - centerSize;

  return (
    <Card
      className="
        bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-blue-500/10
        border border-blue-500/30
        backdrop-blur-md backdrop-saturate-150 p-4
        animate-fadeIn animate-gradient-x
      "
    >
      <CardHeader>
        <CardTitle
          className="
            text-1xl font-extrabold tracking-tight
            bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent
          "
        >
          Conexões de Inteligência IA
        </CardTitle>
      </CardHeader>

      <CardContent>
        <svg width={width} height={height}>
          {/* Gradientes custom azulados */}
          <LinearGradient id="grad1" from={blueDark} to={blue} vertical={false} />
          <LinearGradient id="grad2" from={blue} to={blueLight} vertical={false} />
          <LinearGradient id="grad3" from={blueLight} to={blueBright} vertical={false} />
          <LinearGradient id="grad4" from={blueBright} to={neon} vertical={false} />

          {/* HUD Background */}
          <rect width={width} height={height} fill="#0f172a" rx={14} />

          <Group top={height / 2} left={width / 2}>
            <Chord matrix={matrix} padAngle={0.04} sortSubgroups={descending}>
              {({ chords }) => (
                <g>
                  {chords.groups.map((group, i) => (
                    <Arc
                      key={`arc-${i}`}
                      data={group}
                      innerRadius={innerRadius}
                      outerRadius={outerRadius}
                      fill={colorScale(i)}
                      onClick={() => alert(`Grupo: ${i}`)}
                    />
                  ))}
                  {chords.map((chord, i) => (
                    <Ribbon
                      key={`ribbon-${i}`}
                      chord={chord}
                      radius={innerRadius}
                      fill={colorScale(chord.source.index)}
                      fillOpacity={0.75}
                      onClick={() => alert(`Conexão entre ${chord.source.index} e ${chord.target.index}`)}
                    />
                  ))}
                </g>
              )}
            </Chord>
          </Group>
        </svg>
      </CardContent>
    </Card>
  );
}
