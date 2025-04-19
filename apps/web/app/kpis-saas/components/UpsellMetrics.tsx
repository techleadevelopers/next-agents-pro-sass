'use client';

import { FC } from 'react';
import BarChartCustom from '../../charts/BarChartCustom';
import { ChartContainer, SectionTitle } from '../../packages/ui/src';

const UpsellMetrics: FC = () => {
  const data = [
    { label: 'Plano Pro', value: 30 },
    { label: 'White-label', value: 15 },
    { label: 'Add-ons IA', value: 45 },
  ];

  return (
    <ChartContainer
      title="Vendas Adicionais (Upsell)"
      subtitle="Planos e Add-ons adquiridos"
    >
      <SectionTitle
        title="Upsells"
        subtitle="Performance de upgrade nos planos"
      />
      <div className="mt-4">
        <BarChartCustom data={data} />
      </div>
    </ChartContainer>
  );
};

export default UpsellMetrics;
