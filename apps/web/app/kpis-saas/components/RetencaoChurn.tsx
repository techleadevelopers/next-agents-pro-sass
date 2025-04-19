'use client';

import { FC } from 'react';
import  DonutChartIA  from '../../charts/DonutChartIA';
import { ChartContainer, SectionTitle } from '../../packages/ui/src';

const RetencaoChurn: FC = () => {
  const data = [
    { id: 'Retidos', label: 'Retidos', value: 82, color: '#22c55e' },
    { id: 'Churn', label: 'Churn', value: 18, color: '#ef4444' },
  ];

  return (
    <ChartContainer title="Retenção de Clientes" subtitle="Churn vs Retenção">
      <SectionTitle title="Taxa de Retenção" subtitle="Comparativo mensal de churn" />
      <div className="mt-4">
        <DonutChartIA data={data} />
      </div>
    </ChartContainer>
  );
};

export default RetencaoChurn;
