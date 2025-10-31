import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskInterface } from './task-interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal(DUMMY_TASKS);

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks.set(JSON.parse(storedTasks));
    }
  }

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(newTask: NewTaskInterface, userId: string) {
    const newTaskEntry = {
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
    };

    this.tasks.set([...this.tasks(), newTaskEntry]);
    this.saveTasksToLocalStorage();
  }

  removeTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
