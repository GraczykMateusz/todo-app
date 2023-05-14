import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {TaskComponent} from './components/tasks/task-for-the-day-view/task/task.component';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {TaskForTheDayView} from './components/tasks/task-for-the-day-view/task-for-the-day-view.component';
import {DaysViewComponent} from './components/tasks/days-view/days-view.component';
import {DayComponent} from './components/tasks/days-view/day/day.component';
import {environment} from '../environments/environment';
import {AddTaskViewComponent} from './components/tasks/add-task-view/add-task-view.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainDashboardComponent,
    TaskForTheDayView,
    DaysViewComponent,
    DayComponent,
    AddTaskViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
