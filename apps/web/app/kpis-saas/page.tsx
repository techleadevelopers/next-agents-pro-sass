import dynamic from 'next/dynamic';

const KPIsSaaSContainer = dynamic(() => import('./containers/KPIsSaaS.container'), {
  ssr: false,
});

export default function KPIsSaaSPage() {
  return <KPIsSaaSContainer />;
}
