import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <- Deixa disponível pra app toda se quiser
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
