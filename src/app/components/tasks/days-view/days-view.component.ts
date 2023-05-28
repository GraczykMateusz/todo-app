import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DaysService } from '../../../services/days/days.service';
import { Day } from '../../../services/days/days';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-days-view',
  templateUrl: './days-view.component.html',
  styleUrls: ['./days-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DaysViewComponent {

  private readonly daysService: DaysService = inject(DaysService);

  readonly days: Day[] = this.daysService.days;

  changeDay(event: NgbSlideEvent): void {
    this.daysService.changeDay(event.current);
  }
}
