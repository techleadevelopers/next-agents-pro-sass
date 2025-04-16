import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { CreateVideoDto } from './dto/create-video.dto';

type Faq = {
  id: string;
  pergunta: string;
  resposta: string;
};

type Video = {
  id: string;
  titulo: string;
  url: string;
};

@Injectable()
export class SupportService {
  private faqs: Faq[] = [];
  private videos: Video[] = [];

  // Criar novo FAQ
  createFaq(dto: CreateFaqDto): Faq {
    const newFaq: Faq = { id: crypto.randomUUID(), ...dto };
    this.faqs.push(newFaq);
    return newFaq;
  }

  // Listar todos os FAQs
  findAllFaqs(): Faq[] {
    return this.faqs;
  }

  // Atualizar FAQ existente
  updateFaq(id: string, dto: UpdateFaqDto): Faq | undefined {
    const faq = this.faqs.find((f) => f.id === id);
    if (faq) Object.assign(faq, dto);
    return faq;
  }

  // Deletar FAQ por ID
  deleteFaq(id: string) {
    this.faqs = this.faqs.filter((f) => f.id !== id);
    return { deleted: true };
  }

  // Criar vídeo tutorial
  createVideo(dto: CreateVideoDto): Video {
    const newVideo: Video = { id: crypto.randomUUID(), ...dto };
    this.videos.push(newVideo);
    return newVideo;
  }

  // Listar vídeos tutoriais
  findAllVideos(): Video[] {
    return this.videos;
  }
}
