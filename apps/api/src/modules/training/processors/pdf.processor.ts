import pdfParse from 'pdf-parse';


export class PdfProcessor {
  static async extractText(buffer: Buffer): Promise<string> {
    try {
      const data = await pdfParse(buffer);
      return data.text;
    } catch (error) {
      console.error('Erro ao extrair texto do PDF:', error);
      throw new Error('Falha ao processar PDF');
    }
  }
}
