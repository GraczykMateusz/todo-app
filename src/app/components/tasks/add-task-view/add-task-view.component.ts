import {Component, inject} from '@angular/core';
import {TasksService} from '../../../services/tasks/tasks.service';
import {NewTask} from '../../../services/tasks/model/new-task';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-add-task-view',
  templateUrl: './add-task-view.component.html',
  styleUrls: ['./add-task-view.component.css']
})
export class AddTaskViewComponent {

  private readonly taskService = inject(TasksService);

  public addTask(): void {
    const task = new NewTask('nananana', new Date());
    this.taskService.addTask(task);
  }
}
