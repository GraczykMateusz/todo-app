import {Component} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  private _taskCompleted: boolean = false;

  get isClassEnabled(): boolean {
    return this._taskCompleted;
  }

  toggleCompleteTask(): void {
    this._taskCompleted = !this._taskCompleted;
  }
}
