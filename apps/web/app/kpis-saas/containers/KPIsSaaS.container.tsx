'use client';

import { FC } from 'react';
import MRRChart from '../components/MRRChart';
import RetencaoChurn from '../components/RetencaoChurn';
import UpsellMetrics from '../components/UpsellMetrics';

const KPIsSaaSContainer: FC = () => {
  return (
    <section className="space-y-10 px-4 md:px-10 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <MRRChart />
        <RetencaoChurn />
        <UpsellMetrics />
      </div>
    </section>
  );
};

export default KPIsSaaSContainer;
