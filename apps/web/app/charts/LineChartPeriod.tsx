// apps/web/components/charts/LineChartPeriod.tsx

import { FC } from 'react';
import { ParentSize } from '@visx/responsive';
import { LinePath } from '@visx/shape';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveMonotoneX } from '@visx/curve';
import { GridRows, GridColumns } from '@visx/grid';
import { scaleLinear, scaleTime } from '@visx/scale';
import ChartContainer from '../packages/ui/src/ChartContainer';
import ChartLoader from '../packages/ui/src/ChartLoader';


type DataPoint = {
    date: string;
    ia: number;
    human: number;
  };
  
  interface LineChartPeriodProps {
    data: DataPoint[];
    loading?: boolean;
  }
  
  const LineChartPeriod: FC<LineChartPeriodProps> = ({ data, loading = false }) => {
    return (
      <ChartContainer title="Mensagens por Período" subtitle="Comparativo IA x Humanas">
        {loading ? (
          <ChartLoader />
        ) : (
          <ParentSize>
            {({ width, height }) => {
              const margin = { top: 20, right: 30, bottom: 40, left: 50 };
              const innerWidth = width - margin.left - margin.right;
              const innerHeight = height - margin.top - margin.bottom;
  
              const x = (d: DataPoint) => new Date(d.date);
  
              const xScale = scaleTime({
                range: [0, innerWidth],
                domain: [Math.min(...data.map((d) => new Date(d.date).getTime())), Math.max(...data.map((d) => new Date(d.date).getTime()))],
              });
  
              const yScale = scaleLinear({
                range: [innerHeight, 0],
                domain: [0, Math.max(...data.map((d) => d.ia + d.human))],
              });
  
              return (
                <svg width={width} height={height}>
                  <g transform={`translate(${margin.left},${margin.top})`}>
                    <GridRows scale={yScale} width={innerWidth} />
                    <GridColumns scale={xScale} height={innerHeight} />
  
                    <LinePath
                      data={data}
                      x={(d) => xScale(x(d)) ?? 0}
                      y={(d) => yScale(d.ia) ?? 0}
                      stroke="#7a288a"
                      strokeWidth={2.5}
                      curve={curveMonotoneX}
                    />
  
                    <LinePath
                      data={data}
                      x={(d) => xScale(x(d)) ?? 0}
                      y={(d) => yScale(d.human) ?? 0}
                      stroke="#4682b4"
                      strokeWidth={2.5}
                      curve={curveMonotoneX}
                    />
  
                    <AxisBottom top={innerHeight} scale={xScale} />
                    <AxisLeft scale={yScale} />
                  </g>
                </svg>
              );
            }}
          </ParentSize>
        )}
      </ChartContainer>
    );
  };
  
  export default LineChartPeriod;