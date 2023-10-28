import { Component, inject, OnDestroy } from '@angular/core';
import { TasksService } from '../../../../services/tasks/tasks.service';

@Component({
  selector: 'app-undo-task-deletion',
  templateUrl: './undo-task-deletion.component.html',
  styleUrls: ['./undo-task-deletion.component.css']
})
export class UndoTaskDeletionComponent implements OnDestroy {
  
  protected timeToDeleteTaskInSeconds: number = 3;
  
  private readonly taskService: TasksService = inject(TasksService);
  private isClicked: boolean = false;
  
  private readonly _intervalId = setInterval(() => {
    this.timeToDeleteTaskInSeconds = this.timeToDeleteTaskInSeconds - 1;
    if (this.timeToDeleteTaskInSeconds === 0) {
      clearInterval(this._intervalId);
      this.taskService.hideUndoComponent();
    }
  }, 1000);
  
  ngOnDestroy(): void {
    clearInterval(this._intervalId);
  }
  
  undo(): void {
    if (!this.isClicked) {
      this.isClicked = true;
    } else {
      return;
    }
    clearInterval(this._intervalId);
    this.taskService.undoTaskDeletion().then();
  }
}
