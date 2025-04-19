// components/Dashboard/WhatsApp/SessaoAcoesRapidas.tsx

import React from 'react';
import { Button } from '@/components/ui/button';

interface SessaoAcoesRapidasProps {
  agentId: string;
  onRecarregar: () => void;
  onVerQR: () => void;
  onDiagnostico: () => void;
}

export const SessaoAcoesRapidas: React.FC<SessaoAcoesRapidasProps> = ({
  agentId,
  onRecarregar,
  onVerQR,
  onDiagnostico,
}) => {
  return (
    <div className="flex space-x-2 mt-2">
      <Button variant="default" size="sm" onClick={onRecarregar}>
        🔁 Recarregar
      </Button>
      <Button variant="outline" size="sm" onClick={onVerQR}>
        📷 Ver QR
      </Button>
      <Button variant="destructive" size="sm" onClick={onDiagnostico}>
        🧪 Diagnóstico
      </Button>
    </div>
  );
};
