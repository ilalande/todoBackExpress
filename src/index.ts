import express, { Express, Request, Response } from 'express';
import { config } from './config';
import cors from 'cors';
import prisma from '../prisma/index';
import tasksRouter from './router/taskRouter';
const app: Express = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello there !');
});

app.listen(config.PORT, () =>
  console.log(`⚡️Server runnning http://localhost:${config.PORT}`)
);

app.use('/tasks', tasksRouter);
