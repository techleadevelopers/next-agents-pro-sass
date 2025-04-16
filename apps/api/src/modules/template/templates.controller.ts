import { Controller, Get } from '@nestjs/common';
import { TemplatesService } from './templates.service';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Get('popularidade')
  async getPopularidade() {
    return this.templatesService.getPopularidade();
  }
}
