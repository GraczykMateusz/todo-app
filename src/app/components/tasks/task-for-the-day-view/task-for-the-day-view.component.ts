import { Component, inject, OnInit } from '@angular/core';
import { TasksService } from '../../../services/tasks/tasks.service';
import { DaysService } from '../../../services/days/days.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-task-for-the-day',
  templateUrl: './task-for-the-day-view.component.html',
  styleUrls: ['./task-for-the-day-view.component.css']
})
export class TaskForTheDayViewComponent implements OnInit {

  private readonly daysService: DaysService = inject(DaysService);
  private readonly taskService: TasksService = inject(TasksService);

  tasks$: any;

  public ngOnInit(): void {
    this.tasks$ = this.daysService.currentDay.pipe(

      switchMap(day => this.taskService.getTasksByDate(day.date))
    );
  }
}
