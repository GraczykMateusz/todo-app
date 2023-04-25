import {Component, ViewEncapsulation} from '@angular/core';

export enum WEEK {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

@Component({
  selector: 'app-days-view',
  templateUrl: './days-view.component.html',
  styleUrls: ['./days-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DaysViewComponent {

  readonly week: WEEK[] = Object.values(WEEK);

}
