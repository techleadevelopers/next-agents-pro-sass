import { Queue, Worker } from 'bullmq';
import { SendMessageUseCase } from '../../application/use-cases/send-message.use-case';
import { BaileysClient } from '../../infrastructure/client/baileys.client';
import { SendMessageDto } from '../../application/dto/send-message.dto';

export const whatsappQueue = new Queue('whatsapp');

export const whatsappWorker = new Worker('whatsapp', async (job) => {
  const { agentId, phone, message } = job.data;

  // Instanciando manualmente o cliente Baileys
  const baileysClient = new BaileysClient(); // <- Esse client precisa estar funcional!
  const useCase = new SendMessageUseCase(baileysClient);

  const dto: SendMessageDto = { phone, message };
  await useCase.execute(agentId, dto);
});
