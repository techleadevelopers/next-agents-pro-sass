// src/core/whatsapp.session.ts

import { useMultiFileAuthState } from '@whiskeysockets/baileys'
import path from 'path'
import fs from 'fs'

export class WhatsAppSessionManager {
  static getSessionFolder(agentId: string) {
    const sessionPath = path.resolve(
      __dirname,
      '..',
      '..',
      'generated',
      'whatsapp',
      agentId
    )

    if (!fs.existsSync(sessionPath)) {
      fs.mkdirSync(sessionPath, { recursive: true })
    }

    return sessionPath
  }

  static async getAuthState(agentId: string) {
    const sessionFolder = this.getSessionFolder(agentId)

    // Retorna { state, saveCreds }
    return await useMultiFileAuthState(sessionFolder)
  }
}
