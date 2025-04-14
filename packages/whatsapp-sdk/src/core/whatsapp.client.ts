import {
    makeWASocket,
    DisconnectReason,
    useMultiFileAuthState,
    makeInMemoryStore,
    fetchLatestBaileysVersion,
    WASocket,
  } from '@whiskeysockets/baileys'
  
  import { Boom } from '@hapi/boom'
  import path from 'path'
  import fs from 'fs'
  import qrcode from 'qrcode-terminal' // Integração do QRCode Terminal
  
  // Store em memória para persistência opcional de mensagens e eventos
  const store = makeInMemoryStore({})
  
  // Salva histórico localmente (importante pra testes/dev)
  store.readFromFile('./whatsapp_store.json')
  
  // Salva o store em disco de tempos em tempos
  setInterval(() => {
    store.writeToFile('./whatsapp_store.json')
  }, 10000)
  
  export async function makeWhatsAppClient(agentId: string): Promise<WASocket> {
    const sessionFolder = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'generated',
      'whatsapp',
      agentId,
    )
  
    if (!fs.existsSync(sessionFolder)) {
      fs.mkdirSync(sessionFolder, { recursive: true })
    }
  
    const { state, saveCreds } = await useMultiFileAuthState(sessionFolder)
  
    const { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(`Baileys versão: ${version} | Última: ${isLatest}`)
  
    const sock = makeWASocket({
      version,
      auth: state,
      printQRInTerminal: true, // Mantém também o padrão do Baileys
    })
  
    // Vincula o store à instância do cliente
    store.bind(sock.ev)
  
    // Salva automaticamente os dados de autenticação
    sock.ev.on('creds.update', saveCreds)
  
    // Geração do QR Code no terminal (Visual Bonito)
    sock.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
      if (qr) {
        qrcode.generate(qr, { small: true })
      }
  
      if (connection === 'close') {
        const shouldReconnect =
          (lastDisconnect?.error as Boom)?.output?.statusCode !==
          DisconnectReason.loggedOut
  
        console.log(`Conexão encerrada. Deve reconectar? ${shouldReconnect}`)
  
        if (shouldReconnect) {
          makeWhatsAppClient(agentId)
        }
      }
  
      if (connection === 'open') {
        console.log(`Cliente WhatsApp conectado com sucesso: ${agentId}`)
      }
    })
  
    // Evento de novas mensagens recebidas
    sock.ev.on('messages.upsert', async (msg) => {
      console.log(
        `Mensagem recebida do agent: ${agentId}`,
        JSON.stringify(msg, null, 2),
      )
    })
  
    return sock
  }
  