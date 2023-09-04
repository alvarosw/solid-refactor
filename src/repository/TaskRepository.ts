import { Task } from '../model/Task';

export class TaskRepository {
  private tasks: Task[] = [];

  add(task: Task): void {
    this.tasks.push(task);
  }

  list(): Task[] {
    return this.tasks;
  }
}
