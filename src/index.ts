import express, { Express, Request, Response } from 'express';
import { config } from './config';
import cors from 'cors';

const app: Express = express();
app.use(cors());

app.route('/').get((req: Request, res: Response) => {
  res.send('Hello there !');
});

app.listen(config.PORT, () =>
  console.log(`⚡️Server runnning http://localhost:${config.PORT}`)
);
