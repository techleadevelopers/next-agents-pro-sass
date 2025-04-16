export const whatsappConfig = {
    maxSessionsPerTenant: 5,
    qrCodeExpiration: 120, // segundos
    messageRetryAttempts: 3,
    baileys: {
      folderPath: './sessions',
      useMultiDevice: true,
    },
  };
  