import { Component, inject, Input } from '@angular/core';
import { TasksService } from '../../../../services/tasks/tasks.service';
import { Task } from '../../../../services/tasks/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input()
  public task!: Task;

  private readonly taskService: TasksService = inject(TasksService);

  private _isTaskRemoving: boolean = false;

  toggleCompleteTask(): void {
    this.taskService.toggleCompleteTask(this.task.id, !this.task.isCompleted)
      .then(() => this.task.isCompleted = !this.task.isCompleted);
  }

  get isTaskRemoving(): boolean {
    return this._isTaskRemoving;
  }

  removeTask(): void {
    this.taskService.removeTask(this.task.id)
      .then(() => this._isTaskRemoving = true);
  }
}
