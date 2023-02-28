import prisma from '../../prisma/index';
import { Router } from 'express';
import { IAddTaskPayload } from '../custom-types/payload-types';

const tasksRouter = Router();

tasksRouter.get('/', async (req, res) => {
  try {
    const result = await prisma.task.findMany();
    res.status(200).send(result);
  } catch (error: any) {
    return res.status(401).json({
      message: 'Problème de serveur',
      error,
    });
  }
});

tasksRouter.post('/', async (req, res) => {
  try {
    const newTaskData: IAddTaskPayload = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      ended: req.body.ended,
    };

    //on ne peut pas ajouter un tâche avec un titre vide
    if (!newTaskData.title) {
      return res
        .status(400)
        .json({ message: 'Vous ne pouvez pas ajouter de tâche sans nom' });
    }
    const result = await prisma.task.create({
      data: newTaskData,
    });

    res.status(200).send(result);
  } catch (error: any) {
    return res.status(400).json({ message: 'Erreur de requête' });
  }
});

tasksRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const taskId = parseInt(id);
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
    //on ne peut modifier que les tâches sur lesquelles ont est inscrit ou qui n'ont pas de personnes assignées
  } else {
    const updatedTask = await prisma.task.update({
      where: {
        taskId: taskId,
      },
      data: updatedTaskData,
      include: { author: true },
    });
    return res.status(201).send(updatedTask);
  }
});

export default tasksRouter;
