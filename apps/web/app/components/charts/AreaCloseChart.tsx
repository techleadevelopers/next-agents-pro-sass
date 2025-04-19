'use client';

import React, { useMemo, useCallback } from 'react';
import { AreaClosed, Line, Bar } from '@visx/shape';
import { curveMonotoneX } from '@visx/curve';
import { GridRows, GridColumns } from '@visx/grid';
import { scaleTime, scaleLinear } from '@visx/scale';
import { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';
import { localPoint } from '@visx/event';
import { LinearGradient } from '@visx/gradient';
import { max, extent, bisector } from '@visx/vendor/d3-array';
import { timeFormat } from '@visx/vendor/d3-time-format';
import { AxisBottom, AxisLeft } from '@visx/axis';

// ---------- ✅ Custom Data ----------
type AgentPerformance = {
  date: Date;
  value: number;
};

const desempenhoAgentes: AgentPerformance[] = [
  { date: new Date(2024, 0, 1), value: 80 },
  { date: new Date(2024, 1, 1), value: 55 },
  { date: new Date(2024, 2, 1), value: 90 },
  { date: new Date(2024, 3, 1), value: 60 },
  { date: new Date(2024, 4, 1), value: 70 },
  { date: new Date(2024, 5, 1), value: 65 },
  { date: new Date(2024, 6, 1), value: 85 },
  { date: new Date(2024, 7, 1), value: 60 },
  { date: new Date(2024, 8, 1), value: 75 },
  { date: new Date(2024, 9, 1), value: 50 },
  { date: new Date(2024, 10, 1), value: 68 },
  { date: new Date(2024, 11, 1), value: 72 },
];

const stock = desempenhoAgentes;
const getDate = (d: AgentPerformance) => d.date;
const getValue = (d: AgentPerformance) => d.value;
const bisectDate = bisector<AgentPerformance, Date>((d) => d.date).left;

// ---------- ✅ Style ----------
export const background = '#3b6978';
export const background2 = '#204051';
export const accentColor = '#edffea';
export const accentColorDark = '#75daad';
const tooltipStyles = {
  ...defaultStyles,
  background,
  border: '1px solid white',
  color: 'white',
};

const formatDate = timeFormat('%b %d, %Y');

export type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default withTooltip<AreaProps, AgentPerformance>(
  ({
    width,
    height,
    margin = { top: 0, right: 0, bottom: 0, left: 0 },
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipTop = 0,
    tooltipLeft = 0,
  }: AreaProps & WithTooltipProvidedProps<AgentPerformance>) => {
    if (width < 10) return null;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [margin.left, innerWidth + margin.left],
          domain: extent(stock, getDate) as [Date, Date],
        }),
      [innerWidth, margin.left]
    );

    const valueScale = useMemo(
      () =>
        scaleLinear({
          range: [innerHeight + margin.top, margin.top],
          domain: [0, (max(stock, getValue) || 0) + innerHeight / 3],
          nice: true,
        }),
      [margin.top, innerHeight]
    );

    const handleTooltip = useCallback(
      (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
        const { x } = localPoint(event) || { x: 0 };
        const x0 = dateScale.invert(x);
        const index = bisectDate(stock, x0, 1);
        const d0 = stock[index - 1];
        const d1 = stock[index];
        let d = d0;
        if (d1 && getDate(d1)) {
          d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
        }
        showTooltip({
          tooltipData: d,
          tooltipLeft: x,
          tooltipTop: valueScale(getValue(d)),
        });
      },
      [showTooltip, valueScale, dateScale]
    );

    return (
      <div>
        <svg width={width} height={height}>
  <rect
    x={0}
    y={0}
    width={width}
    height={height}
    fill="url(#area-background-gradient)"
    rx={14}
  />
  <LinearGradient id="area-background-gradient" from={background} to={background2} />
  <LinearGradient id="area-gradient" from={accentColor} to={accentColor} toOpacity={0.1} />

  {/* Linhas de grade */}
  <GridRows
    left={margin.left}
    scale={valueScale}
    width={innerWidth}
    strokeDasharray="1,3"
    stroke={accentColor}
    strokeOpacity={0.1}
    pointerEvents="none"
  />
  <GridColumns
    top={margin.top}
    scale={dateScale}
    height={innerHeight}
    strokeDasharray="1,3"
    stroke={accentColor}
    strokeOpacity={0.2}
    pointerEvents="none"
  />

  {/* EIXO Y (valores) */}
  <AxisLeft
    left={margin.left}
    scale={valueScale}
    stroke={accentColor}
    tickStroke={accentColor}
    tickLabelProps={() => ({
      fill: '#60a5fa',
      fontSize: 11,
      textAnchor: 'end',
      dx: '-0.25em',
      dy: '0.25em',
    })}
    label="Desempenho"
    labelProps={{
      fill: '#60a5fa',
      fontSize: 12,
      textAnchor: 'middle',
      angle: -90,
      dx: '-2em',
      dy: '-4em',
    }}
  />

  {/* EIXO X (meses) */}
  <AxisBottom
    top={innerHeight}
    scale={dateScale}
    stroke={accentColor}
    tickStroke={accentColor}
    tickFormat={(d) =>
      formatDate(new Date(typeof d === 'number' ? d : d.valueOf())).split(',')[0]
    }
    tickLabelProps={() => ({
      fill: '#60a5fa',
      fontSize: 11,
      textAnchor: 'middle',
    })}
  />

  {/* Curva de área preenchida */}
  <AreaClosed<AgentPerformance>
    data={stock}
    x={(d) => dateScale(getDate(d)) ?? 0}
    y={(d) => valueScale(getValue(d)) ?? 0}
    yScale={valueScale}
    strokeWidth={1}
    stroke="url(#area-gradient)"
    fill="url(#area-gradient)"
    curve={curveMonotoneX}
  />

  {/* Captura interações para tooltip */}
  <Bar
    x={margin.left}
    y={margin.top}
    width={innerWidth}
    height={innerHeight}
    fill="transparent"
    rx={14}
    onTouchStart={handleTooltip}
    onTouchMove={handleTooltip}
    onMouseMove={handleTooltip}
    onMouseLeave={() => hideTooltip()}
  />

          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: margin.top }}
                to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                stroke={accentColorDark}
                strokeWidth={2}
                pointerEvents="none"
                strokeDasharray="5,2"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop + 1}
                r={4}
                fill="black"
                fillOpacity={0.1}
                stroke="black"
                strokeOpacity={0.1}
                strokeWidth={2}
                pointerEvents="none"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill={accentColorDark}
                stroke="white"
                strokeWidth={2}
                pointerEvents="none"
              />
            </g>
          )}
        </svg>

        {tooltipData && (
          <div>
            <TooltipWithBounds
              key={Math.random()}
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={tooltipStyles}
            >
              {`${getValue(tooltipData)}%`}
            </TooltipWithBounds>
            <Tooltip
              top={innerHeight + margin.top - 14}
              left={tooltipLeft}
              style={{
                ...defaultStyles,
                minWidth: 72,
                textAlign: 'center',
                transform: 'translateX(-50%)',
              }}
            >
              {formatDate(getDate(tooltipData))}
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
);
