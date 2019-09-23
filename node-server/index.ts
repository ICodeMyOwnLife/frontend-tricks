import { join, resolve } from 'path';
import express from 'express';
import morgan from 'morgan';

const DIR_BUILD = resolve('../build');
const app = express();

app.use(morgan('common'));
app.use(express.static(DIR_BUILD));

// serve index.html for any unknown paths
app.get('/*', (_req, res) => {
  res.sendFile(join(DIR_BUILD, 'index.html'));
});

app.listen(Number(process.env.PORT) || 4000);
