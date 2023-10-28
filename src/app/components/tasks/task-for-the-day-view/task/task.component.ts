import { Component, inject, Input, OnInit } from '@angular/core';
import { TasksService } from '../../../../services/tasks/tasks.service';
import { Task } from '../../../../services/tasks/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  @Input()
  public task!: Task;
  
  private readonly taskService: TasksService = inject(TasksService);
  
  private _originalContent!: string;
  
  ngOnInit(): void {
    this._originalContent = this.task.content;
  }
  
  toggleCompleteTask(): void {
    this.taskService.toggleCompleteTask(this.task.id, !this.task.isCompleted).then();
  }
  
  removeTask(): void {
    this.taskService.deleteTask(this.task).then();
  }
  
  updateTaskContentIfNeeded(): void {
    if (this.task.content === this._originalContent) {
      return;
    }
    if (this.task.content.trim() === '') {
      this.task.content = this._originalContent;
      this.removeTask();
      return;
    }
    this.taskService.updateTaskContent(this.task).then();
  }
}
