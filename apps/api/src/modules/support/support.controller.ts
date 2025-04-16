import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { SupportService } from './support.service';
  import { CreateFaqDto } from './dto/create-faq.dto';
  import { UpdateFaqDto } from './dto/update-faq.dto';
  import { CreateVideoDto } from './dto/create-video.dto';
  
  @Controller('support')
  export class SupportController {
    constructor(private readonly supportService: SupportService) {}
  
    // FAQ
    @Get('faq')
    findAllFaqs() {
      return this.supportService.findAllFaqs();
    }
  
    @Post('faq')
    createFaq(@Body() dto: CreateFaqDto) {
      return this.supportService.createFaq(dto);
    }
  
    @Patch('faq/:id')
    updateFaq(@Param('id') id: string, @Body() dto: UpdateFaqDto) {
      return this.supportService.updateFaq(id, dto);
    }
  
    @Delete('faq/:id')
    deleteFaq(@Param('id') id: string) {
      return this.supportService.deleteFaq(id);
    }
  
    // Vídeos
    @Get('videos')
    findAllVideos() {
      return this.supportService.findAllVideos();
    }
  
    @Post('videos')
    createVideo(@Body() dto: CreateVideoDto) {
      return this.supportService.createVideo(dto);
    }
  }
  