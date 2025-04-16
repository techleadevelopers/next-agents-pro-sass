import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SttService {
  private readonly logger = new Logger(SttService.name);

  async transcribe(audioBase64: string): Promise<{ text: string }> {
    this.logger.log('🎙️ Transcrevendo áudio base64 recebido...');

    // Simulação de transcrição (padrão placeholder)
    const simulatedText = 'Transcrição simulada de áudio IA';

    return {
      text: simulatedText,
    };
  }
}
