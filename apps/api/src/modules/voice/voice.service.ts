import { Injectable } from '@nestjs/common';
import { TtsService } from './tts/tts.service';
import { SttService } from './stt/stt.service';

@Injectable()
export class VoiceService {
  constructor(
    private readonly ttsService: TtsService,
    private readonly sttService: SttService,
  ) {}

  textToSpeech(text: string) {
    return this.ttsService.speak(text);
  }

  speechToText(audioBase64: string) {
    return this.sttService.transcribe(audioBase64);
  }
}
