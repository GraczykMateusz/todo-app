import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DaysService } from '../../../services/days/days.service';
import { Day } from '../../../services/days/days';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from '../../../services/tasks/tasks.service';
import { map, Observable, switchMap } from 'rxjs';
import { Task } from '../../../services/tasks/model/task';
import { TaskCount } from '../../../services/tasks/model/task-count';

@Component({
  selector: 'app-days-view',
  templateUrl: './days-view.component.html',
  styleUrls: ['./days-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DaysViewComponent {

  private readonly daysService: DaysService = inject(DaysService);
  private readonly taskService: TasksService = inject(TasksService);

  readonly taskCount$: Observable<TaskCount> = this.daysService.currentDay.pipe(
    switchMap((day: Day) => this.taskService.getTasksByDate(day.date)),
    map((tasks: Task[]) => {
      return new TaskCount(tasks.filter(task => task.isCompleted).length, tasks.length);
    })
  );

  readonly days: Day[] = this.daysService.days;

  changeDay(event: NgbSlideEvent): void {
    this.daysService.changeDay(event.current);
  }
}
