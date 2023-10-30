import { Component, inject, OnInit } from '@angular/core';
import { DaysService } from '../../services/days/days.service';
import { UserService } from '../../services/user/user.service';
import { TasksService } from '../../services/tasks/tasks.service';
import { Observable } from 'rxjs';
import { Day } from '../../services/days/days';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  
  private readonly userService: UserService = inject(UserService);
  private readonly daysService: DaysService = inject(DaysService);
  private readonly tasksService: TasksService = inject(TasksService);
  
  readonly currentDay$: Observable<Day> = this.daysService.currentDay;
  
  ngOnInit(): void {
    this.tasksService.moveTasksByDateAndCleanDbRubbish();
  }
  
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
