import { Component, computed, inject, input, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskInterface } from './task/task-interface';
import { TasksService } from './tasks-service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userId = input.required<string>();
  name = input.required<string>();

  isAddingTask = signal<boolean>(false);

  private tasksService = inject(TasksService);

  // selectedUserTasks = computed(() => this.tasks().filter((task) => task.userId === this.userId()));

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }

  // onAddTask(taskData: NewTaskInterface) {
  //   this.tasks.set([
  //     ...this.tasks(),
  //     {
  //       id: Date.now().toString(),
  //       userId: this.userId(),
  //       title: taskData.title,
  //       summary: taskData.summary,
  //       dueDate: taskData.date,
  //     },
  //   ]);

  //   this.isAddingTask.set(false);
  // }
}
