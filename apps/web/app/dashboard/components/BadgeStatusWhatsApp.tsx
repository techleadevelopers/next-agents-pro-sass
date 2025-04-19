// components/Dashboard/WhatsApp/BadgeStatusWhatsApp.tsx

import React from 'react';
import clsx from 'clsx';

interface BadgeStatusWhatsAppProps {
  status: 'ONLINE' | 'OFFLINE' | 'LOADING_QR' | 'ERROR';
}

const statusMap = {
  ONLINE: { label: 'Online', color: 'bg-green-500' },
  OFFLINE: { label: 'Offline', color: 'bg-gray-400' },
  LOADING_QR: { label: 'Aguardando QR', color: 'bg-yellow-500' },
  ERROR: { label: 'Erro', color: 'bg-red-500' },
};

export const BadgeStatusWhatsApp: React.FC<BadgeStatusWhatsAppProps> = ({ status }) => {
  const { label, color } = statusMap[status];

  return (
    <span
      className={clsx(
        'inline-flex items-center px-3 py-1 text-xs font-semibold text-white rounded-full',
        color
      )}
    >
      {label}
    </span>
  );
};
