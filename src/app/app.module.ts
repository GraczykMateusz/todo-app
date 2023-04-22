import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire/compat';
import {AppComponent} from './app.component';
import {TaskComponent} from './components/tasks/task-for-the-day-view/task/task.component';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {TaskForTheDayView} from './components/tasks/task-for-the-day-view/task-for-the-day-view.component';
import {DaysViewComponent} from './components/tasks/days-view/days-view.component';
import {DayComponent} from './components/tasks/days-view/day/day.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainDashboardComponent,
    TaskForTheDayView,
    DaysViewComponent,
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
