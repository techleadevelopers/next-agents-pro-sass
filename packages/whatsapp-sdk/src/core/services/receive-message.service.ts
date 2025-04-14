// receive-message.service.ts

import { askAgent } from 'agents-core/src'
import { Injectable } from '@nestjs/common'
import { sendTextMessage } from './send-message.service'
import { WASocket, proto } from '@whiskeysockets/baileys'


export async function handleIncomingMessage(
  client: WASocket,
  msg: proto.IWebMessageInfo,
  agentId: string,
) {
  try {
    if (!msg.message || !msg.key.remoteJid) return

    const text = extrairTextoMensagem(msg)

    if (!text) return

    console.log(`Pergunta recebida: ${text}`)

    const respostaIA = await askAgent(agentId, text)

    await sendTextMessage(client, msg.key.remoteJid, respostaIA)
  } catch (error) {
    console.error('Erro ao processar mensagem recebida:', error)
  }
}

function extrairTextoMensagem(msg: proto.IWebMessageInfo): string | null {
  if (msg.message?.conversation) {
    return msg.message.conversation
  }
  if (msg.message?.extendedTextMessage?.text) {
    return msg.message.extendedTextMessage.text
  }
  return null
}