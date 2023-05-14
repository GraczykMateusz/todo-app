import {Component, inject, Input} from '@angular/core';
import {TasksService} from '../../../../services/tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input()
  public id!: number;

  private readonly taskService: TasksService = inject(TasksService);

  private _isTaskCompleted: boolean = false;
  private _isTaskRemoving: boolean = false;

  get isTaskCompleted(): boolean {
    return this._isTaskCompleted;
  }

  toggleCompleteTask(): void {
    this._isTaskCompleted = !this._isTaskCompleted;
  }

  get isTaskRemoving(): boolean {
    return this._isTaskRemoving;
  }

  removeTask(): void {
    this._isTaskRemoving = true;
    this.taskService.removeTask(this.id);
  }
}
