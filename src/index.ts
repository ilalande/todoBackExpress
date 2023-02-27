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

// app.get(`/unicorns`, async (req, res) => {
//   console.log('bip');
// });
// app.get('/tasks', async (req, res) => {
//   console.log('bip');
//   // try {
//   //   const tasks = await prisma.task.findMany({
//   //     include: { author: true },
//   //   });

//   //   return res.status(200).json(tasks);
//   // } catch (error: any) {
//   //   return res.status(500).json({
//   //     message: 'Il y a un problème avec le serveur',
//   //     error,
//   //   });
//   // }
// });

// app.route('/tasks').get((req: Request, res: Response) => {
// const taskId = parseInt(req.query.id as string);
// if (taskId) {
//   try {
//     const task = await prisma.task.findUnique({
//       where: {
//         taskId: taskId,
//       },
//     });
//     return res.status(200).json(task);
//   } catch (error: any) {
//     return res
//       .status(404)
//       .send({ message: "La tâche demandée n'existe pas", error });
//   }
// }
//   console.log('bip');
//   res.send('Bip');
// });
