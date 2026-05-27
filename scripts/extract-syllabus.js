import fs from 'node:fs';
import { PDFParse } from 'pdf-parse';

const input  = process.argv[2];
const output = process.argv[3];

if (!input) {
  console.error('usage: node scripts/extract-syllabus.js <input.pdf> [output.txt]');
  process.exit(1);
}

const data = new Uint8Array(fs.readFileSync(input));
const parser = new PDFParse({ data });
const result = await parser.getText();

const text  = result.text || '';
const pages = result.pages || result.numpages || (result.pageTexts ? result.pageTexts.length : 0);

console.log('=== meta ===');
console.log('pages :', pages);
console.log('chars :', text.length);
console.log();
if (output) {
  fs.writeFileSync(output, text, 'utf8');
  console.log('wrote raw text to', output);
} else {
  console.log(text.slice(0, 6000));
}
