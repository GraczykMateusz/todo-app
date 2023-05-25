import { Component, Input } from '@angular/core';
import { OwnDate } from '../../../../services/days/own-date';
import { TaskCount } from '../../../../services/tasks/model/task-count';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  @Input() name!: string;
  @Input() ownDate!: OwnDate;
  @Input() taskCount!: TaskCount;
}
