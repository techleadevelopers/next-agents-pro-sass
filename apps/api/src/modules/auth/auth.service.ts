import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(dto: LoginDto) {
    // Exemplo estático (substituir por lookup real no banco)
    if (dto.email === 'admin@admin.com' && dto.password === 'admin') {
      const payload = { sub: 'admin', email: dto.email };
      return { access_token: this.jwtService.sign(payload) };
    }

    throw new UnauthorizedException('Credenciais inválidas');
  }
}
