import { Injectable } from '@nestjs/common';
import { UploadTrainingDto } from './dto/upload-training.dto';
import { PdfProcessor } from './processors/pdf.processor';
import { CsvProcessor } from './processors/csv.processor';

// Mesmo tipo aqui também (opcional se já tiver no controller)
interface UploadedMulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

@Injectable()
export class TrainingService {
  async uploadAndProcess(file: UploadedMulterFile, dto: UploadTrainingDto) {
    if (!file) throw new Error('Arquivo não enviado');

    const content =
      dto.type === 'pdf'
        ? await PdfProcessor.extractText(file.buffer)
        : await CsvProcessor.extractData(file.buffer);

    return {
      message: 'Arquivo processado com sucesso',
      type: dto.type,
      size: content.length,
    };
  }
}
