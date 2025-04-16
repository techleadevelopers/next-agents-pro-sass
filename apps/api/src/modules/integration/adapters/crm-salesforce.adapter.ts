// apps/api/src/modules/integrations/adapters/crm-salesforce.adapter.ts
export async function sendToSalesforce(payload: any) {
    // Em produção: enviar para endpoint real da Salesforce
    console.log('[Salesforce] Enviado para CRM:', payload);
  }
  