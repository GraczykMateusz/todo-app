import {Component, inject, OnInit} from '@angular/core';
import {TasksService} from '../../../services/tasks/tasks.service';
import {take} from 'rxjs';

@Component({
  selector: 'app-task-for-the-day',
  templateUrl: './task-for-the-day-view.component.html',
  styleUrls: ['./task-for-the-day-view.component.css']
})
export class TaskForTheDayView implements OnInit {

  private readonly taskService: TasksService = inject(TasksService);

  getTasks() {
    return this.taskService.getTasks().pipe(take(1));
  }

  ngOnInit(): void {
    this.taskService.getTasks()
      .pipe(take(1))
      .subscribe(r => console.log(r));
  }
}
