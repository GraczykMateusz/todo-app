import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire/compat';
import {AppComponent} from './app.component';
import {TaskComponent} from './components/tasks/task/task.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DailyTasksDashboardComponent} from './components/tasks/daily-tasks-dashboard/daily-tasks-dashboard.component';
import {WeeklyTasksDashboardComponent} from './components/tasks/weekly-tasks-dashboard/weekly-tasks-dashboard.component';
import {DayComponent} from './components/tasks/weekly-tasks-dashboard/day/day.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DashboardComponent,
    DailyTasksDashboardComponent,
    WeeklyTasksDashboardComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
