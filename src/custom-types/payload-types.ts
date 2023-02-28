export interface IUpdateTaskPayload {
  taskId: number;
  date?: string;
  authorName?: string;
  authorId?: string;
  title: string;
  ended: boolean;
  description?: string;
}

export interface IAddTaskPayload {
  date?: string;
  authorName?: string;
  authorId?: string;
  title: string;
  ended: boolean;
  description?: string;
}
