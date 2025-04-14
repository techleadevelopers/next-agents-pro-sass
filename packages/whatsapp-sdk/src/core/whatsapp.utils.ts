import { proto } from '@whiskeysockets/baileys'

/**
 * Extrai o número do remetente da mensagem.
 */
export function extractSenderNumber(msg: proto.IWebMessageInfo): string {
  const jid = msg.key?.remoteJid || ''
  return jid.replace('@s.whatsapp.net', '')
}

/**
 * Extrai o conteúdo da mensagem recebida.
 */
export function extractMessageContent(msg: proto.IWebMessageInfo): string | null {
  const message = msg.message
  if (!message) return null

  if (message.conversation) return message.conversation
  if (message.extendedTextMessage) return message.extendedTextMessage.text || null
  if (message.imageMessage) return '[imagem]'
  if (message.videoMessage) return '[vídeo]'
  if (message.documentMessage) return '[documento]'

  return null
}
