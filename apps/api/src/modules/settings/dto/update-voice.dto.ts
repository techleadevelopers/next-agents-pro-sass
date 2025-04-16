export class UpdateVoiceDto {
    voice!: {
      gender: 'male' | 'female';
      speed: number;
      enabled: boolean;
    };
  }
  