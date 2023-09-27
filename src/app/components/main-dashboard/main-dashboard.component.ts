import { Component, inject } from '@angular/core';
import { DaysService } from '../../services/days/days.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  
  private readonly userService: UserService = inject(UserService);
  private readonly daysService: DaysService = inject(DaysService);
  readonly currentDay$ = this.daysService.currentDay;
  
  getName(): string {
    if (this.userService.getUser().toLowerCase().includes('mateusz')) {
      return 'Mateusz';
    } else if (this.userService.getUser().toLowerCase().includes('martyna')) {
      return 'Martyna';
    } else {
      return 'bro';
    }
  }
}
