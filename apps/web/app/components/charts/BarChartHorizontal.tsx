// apps/web/components/charts/BarChartHorizontal.tsx
import { FC } from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import ChartContainer from '../packages/ui/src/ChartContainer';
import ChartLoader from '../packages/ui/src/ChartLoader';
interface BarChartHorizontalProps {
    data: { name: string; value: number }[];
    loading?: boolean;
    width?: number;
    height?: number;
  }
  
  const BarChartHorizontal: FC<BarChartHorizontalProps> = ({
    data,
    loading = false,
    width = 700,
    height = 400,
  }) => {
    const margin = { top: 40, right: 40, bottom: 50, left: 120 };
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;
  
    const xScale = scaleLinear<number>({
      domain: [0, Math.max(...data.map((d) => d.value))],
      nice: true,
    }).range([0, xMax]);
  
    const yScale = scaleBand<string>({
      domain: data.map((d) => d.name),
      padding: 0.2,
    }).range([0, yMax]);
  
    return (
      <ChartContainer title="Performance dos Agentes" subtitle="Comparativo de Atendimentos">
        {loading ? (
          <ChartLoader />
        ) : (
          <svg width={width} height={height}>
            <Group top={margin.top} left={margin.left}>
              {data.map((d, i) => {
                const y = yScale(d.name) ?? 0;
                const barWidth = xScale(d.value) ?? 0;
                const barHeight = yScale.bandwidth();
  
                return (
                  <Bar
                    key={`bar-${i}`}
                    x={0}
                    y={y}
                    width={barWidth}
                    height={barHeight}
                    fill="#4682b4"
                    rx={4}
                  />
                );
              })}
  
              <AxisLeft scale={yScale} />
              <AxisBottom scale={xScale} top={yMax} />
            </Group>
          </svg>
        )}
      </ChartContainer>
    );
  };
  
  export default BarChartHorizontal;