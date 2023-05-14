import {Component, inject, OnInit} from '@angular/core';
import {TasksService} from '../../../services/tasks/tasks.service';

@Component({
  selector: 'app-task-for-the-day',
  templateUrl: './task-for-the-day-view.component.html',
  styleUrls: ['./task-for-the-day-view.component.css']
})
export class TaskForTheDayView{

  private readonly taskService: TasksService = inject(TasksService);

  getTasks() {
    return this.taskService.getTasks();
  }
}
