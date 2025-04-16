import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TtsService {
  private readonly logger = new Logger(TtsService.name);

  async speak(text: string): Promise<{ audioBase64: string }> {
    this.logger.log(`🔊 Gerando TTS para: "${text}"`);

    // Simulando conversão para áudio (em base64)
    const audioBase64 = Buffer.from(`FakeAudio:${text}`).toString('base64');

    return {
      audioBase64,
    };
  }
}
