import { Task } from './model/Task';
import { TaskRepository } from './repository/TaskRepository';

function createTask(taskRepository: TaskRepository, title: string): void {
	const task = new Task(title);
	taskRepository.add(task);
}

function getTasks(taskRepository: TaskRepository): Task[] {
	return taskRepository.list();
}

const taskRepository = new TaskRepository();

createTask(taskRepository, "Ler livro");
createTask(taskRepository, "Fazer compras");

const tasksList = getTasks(taskRepository);
console.log(tasksList);