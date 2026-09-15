import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const distDirectory = path.join(__dirname, 'dist');

app.disable('x-powered-by');
app.use(express.static(distDirectory, { index: 'index.html' }));

// The client uses hash-based routing, so every non-file request can safely
// fall back to the Vite entry point without server-side route interpretation.
app.get('*', (_req, res) => {
  res.sendFile(path.join(distDirectory, 'index.html'));
});

const port = Number.parseInt(process.env.PORT ?? '3000', 10);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}

app.listen(port, () => {
  console.log(`Cambrian Climate Club server listening on port ${port}`);
});
