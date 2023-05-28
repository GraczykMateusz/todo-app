import { Component, inject } from '@angular/core';
import {DaysService} from '../../services/days/days.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {

  private readonly daysService: DaysService = inject(DaysService);
  readonly currentDay$ = this.daysService.currentDay;
}
