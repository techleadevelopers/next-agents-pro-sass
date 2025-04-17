import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
    Body,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { TrainingService } from './training.service';
  import { UploadTrainingDto } from './dto/upload-training.dto';
  
  // Interface manual segura (evita erro de namespace do TS)
  interface UploadedMulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    buffer: Buffer;
  }
  
  @Controller('training')
  export class TrainingController {
    constructor(private readonly trainingService: TrainingService) {}
  
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(
      @UploadedFile() file: UploadedMulterFile,
      @Body() body: UploadTrainingDto,
    ) {
      return this.trainingService.uploadAndProcess(file, body);
    }
  }
  