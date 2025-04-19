'use client';

import { FC } from 'react';
import LineChartCustom from '../../charts/LineChartCustom';
import { ChartContainer, SectionTitle } from '../../packages/ui/src';

const MRRChart: FC = () => {
  const data = [
    { date: new Date('2024-01-01'), sent: 4200, received: 4000 },
    { date: new Date('2024-02-01'), sent: 6300, received: 6100 },
    { date: new Date('2024-03-01'), sent: 8500, received: 8200 },
    { date: new Date('2024-04-01'), sent: 10200, received: 9900 },
  ];

  return (
    <ChartContainer title="Receita Recorrente (MRR)" subtitle="Evolução da Receita Mensal">
      <SectionTitle title="MRR Mensal" subtitle="Comparativo entre os últimos meses" />
      <div className="mt-4">
        <LineChartCustom data={data} />
      </div>
    </ChartContainer>
  );
};

export default MRRChart;
