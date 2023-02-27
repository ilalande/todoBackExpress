import prisma from '../../prisma/index';
import { Router } from 'express';
import { IAddTaskPayload } from '../custom-types/payload-types';
// import MyResponse from '../models/MyResponse';
const tasksRouter = Router();

tasksRouter.get('/', async (req, res) => {
  console.log('debut');
  try {
    console.log('debut try');
    const taskId = parseInt(req.query.id as string);

    const updatedTaskData: IAddTaskPayload = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      authorId: req.body.authorId,
      ended: req.body.ended,
    };

    const taskInDb = await prisma.task.findUnique({
      where: {
        taskId: taskId,
      },
      include: { author: true },
    });
    if (!taskInDb) {
      res.status(404).send({
        message: "La tâche demandée n'existe pas",
      });
    } else {
      return res.status(404).send({
        message: "La tâche demandée n'existe pas",
      });
    }
  } catch (error: any) {
    return res.status(401).json({
      message: 'Problème de serveur',
      error,
    });
  }
});

export default tasksRouter;
