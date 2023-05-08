import { Component } from '@angular/core';
import {DaysService} from '../../services/days/days.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {

  readonly dayNameToDisplay = this.daysService.getDayNameToDisplay();

  constructor(private daysService: DaysService) {
  }
}
