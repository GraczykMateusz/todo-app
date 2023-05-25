import { Component, inject } from '@angular/core';
import { TasksService } from '../../../services/tasks/tasks.service';
import { DaysService } from '../../../services/days/days.service';
import { Observable, switchMap } from 'rxjs';
import { Day } from '../../../services/days/days';
import { Task } from '../../../services/tasks/model/task';

@Component({
  selector: 'app-task-for-the-day',
  templateUrl: './task-for-the-day-view.component.html',
  styleUrls: ['./task-for-the-day-view.component.css']
})
export class TaskForTheDayViewComponent {

  private readonly daysService: DaysService = inject(DaysService);
  private readonly taskService: TasksService = inject(TasksService);

  readonly tasks$: Observable<Task[]> = this.daysService.currentDay.pipe(
    switchMap((day: Day) => this.taskService.getTasksByDate(day.date))
  );
}
