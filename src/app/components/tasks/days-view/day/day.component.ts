import { Component, inject, Input } from '@angular/core';
import { TaskCount } from '../../../../services/tasks/model/task-count';
import { map, Observable, switchMap } from 'rxjs';
import { Day } from '../../../../services/days/days';
import { Task } from '../../../../services/tasks/model/task';
import { TasksService } from '../../../../services/tasks/tasks.service';
import { DaysService } from '../../../../services/days/days.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  @Input() day!: Day;
  @Input() isToday!: boolean;

  private readonly taskService: TasksService = inject(TasksService);
  private readonly daysService: DaysService = inject(DaysService);

  readonly taskCount$: Observable<TaskCount> = this.daysService.currentDay.pipe(
    switchMap((day: Day) => this.taskService.getTasksByDate(day.ownDate)),
    map((tasks: Task[]) => {
      return new TaskCount(tasks.filter(task => task.isCompleted).length, tasks.length);
    })
  );
}
