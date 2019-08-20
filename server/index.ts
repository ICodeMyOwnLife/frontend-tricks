import { AddressInfo } from 'net';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import serveStatic from 'serve-static';
import bodyParser from 'body-parser';
import contentDisposition from 'content-disposition';
import cors from 'cors';
import { join } from 'path';

const DIR_STATIC = join(__dirname, '..', 'static');
const DIR_PUBLIC = join(__dirname, '..', 'public');
const HEADER_CONTENT_TYPE = 'Content-Type';
const HEADER_CONTENT_DISPOSITION = 'Content-Disposition';

const app = express();

const exportHandler = (req: Request, res: Response) => {
  const count: number = Number(req.body.count || req.query.count) || 10;
  const values = Array(count)
    .fill(0)
    .map((_, idx) => ({ id: idx, value: Math.round(Math.random() * 10000) }));

  res.setHeader(HEADER_CONTENT_TYPE, 'text/html');
  res.setHeader(
    HEADER_CONTENT_DISPOSITION,
    contentDisposition(`${count}_items.json`, { type: 'attachment' }),
  );
  res.status(200).send(values);
};

app.use(morgan('dev'));
app.use(cors({ exposedHeaders: [HEADER_CONTENT_DISPOSITION] }));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({}));
app.use(bodyParser.raw({}));

app.use(
  '/static',
  serveStatic(DIR_STATIC, {
    setHeaders: (res, path) => {
      res.setHeader(
        HEADER_CONTENT_DISPOSITION,
        contentDisposition(path, { type: 'attachment' }),
      );
    },
  }),
);

app.use(
  '/public',
  serveStatic(DIR_PUBLIC, {
    setHeaders: (res, path) => {
      res.setHeader(
        HEADER_CONTENT_DISPOSITION,
        contentDisposition(path, { type: 'inline' }),
      );
    },
  }),
);

app
  .route('/export')
  .get(exportHandler)
  .post(exportHandler);

const server = app.listen(1333, () =>
  // eslint-disable-next-line no-console
  console.log(
    `Server started on port ${(server.address() as AddressInfo).port}`,
  ),
);
