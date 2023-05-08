import {Component, ViewEncapsulation} from '@angular/core';
import {DaysService} from '../../../services/days/days.service';
import {Day} from '../../../services/days/days';
import {NgbSlideEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-days-view',
  templateUrl: './days-view.component.html',
  styleUrls: ['./days-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DaysViewComponent {

  readonly daysInOrder: Day[] = this.daysService.getDaysInOrder();

  constructor(private daysService: DaysService) {
  }

  changeDay(event: NgbSlideEvent) {
    this.daysService.changeDay(event.direction);
  }
}
