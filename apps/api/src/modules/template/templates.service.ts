import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { generateRadialTemplatePopularidade } from './charts/radial-template-popularidade.strategy';

@Injectable()
export class TemplatesService {
  constructor(private prisma: PrismaService) {}

  async getPopularidade() {
    const data = await this.prisma.template.groupBy({
      by: ['categoria'],
      _sum: { vendidos: true },
    });

    return generateRadialTemplatePopularidade(
      data.map((item) => ({
        categoria: item.categoria,
        vendidos: item._sum.vendidos || 0,
      }))
    );
  }
}
