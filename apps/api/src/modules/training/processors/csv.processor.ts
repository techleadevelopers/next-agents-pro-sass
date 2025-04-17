// apps/api/src/modules/training/processors/csv.processor.ts

import csv from 'csv-parser';
import { Readable } from 'stream';

interface CSVRecord {
  [key: string]: string;
}

export class CsvProcessor {
  static extractData(buffer: Buffer): Promise<CSVRecord[]> {
    const results: CSVRecord[] = [];

    return new Promise((resolve, reject) => {
      Readable.from(buffer)
        .pipe(csv())
        .on('data', (data: CSVRecord) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', reject);
    });
  }
}
