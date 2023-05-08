import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  @Input() name?: string;
  @Input() date?: Date;
  @Input() taskCount?: number;
}
