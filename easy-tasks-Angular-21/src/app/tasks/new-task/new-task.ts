import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskInterface } from '../task/task-interface';
import { TasksService } from '../tasks-service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  userId = input.required<string>();
  close = output<void>();
  // add = output<NewTaskInterface>();

  private tasksService = inject(TasksService);

  newTask = signal<NewTaskInterface | null>(null);

  enteredTitle = signal<string | null>(null);
  enteredSummary = signal<string | null>(null);
  enteredDate = signal<string | null>(null);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle()!,
        summary: this.enteredSummary()!,
        date: this.enteredDate()!,
      },
      this.userId()
    );

    this.close.emit();

    // if (this.enteredDate() && this.enteredSummary() && this.enteredTitle()) {
    //   this.add.emit({
    //     title: this.enteredTitle()!,
    //     summary: this.enteredSummary()!,
    //     date: this.enteredDate()!,
    //   });
    // }
  }
}
