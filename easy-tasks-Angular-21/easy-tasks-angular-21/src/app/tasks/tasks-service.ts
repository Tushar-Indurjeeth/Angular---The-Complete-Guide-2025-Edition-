import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskInterface } from './task/task-interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal(DUMMY_TASKS);

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskInterface, userId: string) {
    this.tasks.set([
      ...this.tasks(),
      {
        id: Date.now().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      },
    ]);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== id));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
