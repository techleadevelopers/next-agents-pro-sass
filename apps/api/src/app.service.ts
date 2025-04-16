import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NextAgent-Pro backend rodando com sucesso 🚀';
  }
}
