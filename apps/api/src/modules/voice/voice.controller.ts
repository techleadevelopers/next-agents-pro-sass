import { Controller, Post, Body } from '@nestjs/common';
import { VoiceService } from './voice.service';

@Controller('voice')
export class VoiceController {
  constructor(private readonly voiceService: VoiceService) {}

  @Post('speak')
  tts(@Body() body: { text: string }) {
    return this.voiceService.textToSpeech(body.text);
  }

  @Post('transcribe')
  stt(@Body() body: { audioBase64: string }) {
    return this.voiceService.speechToText(body.audioBase64);
  }
}
