import { WASocket } from '@whiskeysockets/baileys'

export async function sendTextMessage(client: WASocket, remoteJid: string, text: string) {
  await client.sendMessage(remoteJid, { text })
}
