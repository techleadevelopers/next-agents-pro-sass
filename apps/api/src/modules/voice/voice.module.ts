import { Module } from '@nestjs/common';
import { VoiceService } from './voice.service';
import { VoiceController } from './voice.controller';
import { TtsService } from './tts/tts.service';
import { SttService } from './stt/stt.service';

@Module({
  controllers: [VoiceController],
  providers: [VoiceService, TtsService, SttService],
})
export class VoiceModule {}
