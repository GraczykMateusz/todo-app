import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailyTasksDashboardComponent } from './components/tasks/daily-tasks-dashboard/daily-tasks-dashboard.component';
import { WeeklyTasksDashboardComponent } from './components/tasks/weekly-tasks-dashboard/weekly-tasks-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DashboardComponent,
    DailyTasksDashboardComponent,
    WeeklyTasksDashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
