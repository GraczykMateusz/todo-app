import { Component, inject } from '@angular/core';
import { TasksService } from '../../../services/tasks/tasks.service';
import { NewTask } from '../../../services/tasks/model/new-task';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-add-task-view',
  templateUrl: './add-task-view.component.html',
  styleUrls: ['./add-task-view.component.css']
})
export class AddTaskViewComponent {
  
  private readonly userService: UserService = inject(UserService);
  private readonly taskService: TasksService = inject(TasksService);
  
  public content: string = '';
  
  public addTask(): void {
    if (this.content == '' || this.content == null) {
      return;
    }
    const task: NewTask = new NewTask(this.content, this.userService.getUser());
    this.taskService.addTask(task)
      .then(() => this.content = '');
  }
}
