import {Component, ViewEncapsulation} from '@angular/core';
import {DaysService} from '../../../services/days/days.service';
import {WEEK} from '../../../services/days/days';

@Component({
  selector: 'app-days-view',
  templateUrl: './days-view.component.html',
  styleUrls: ['./days-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DaysViewComponent {

  readonly week: WEEK[] = Object.values(WEEK);

  readonly date: Date = this.daysService.getCurrentDay();

  constructor(public daysService: DaysService) {
  }
}
