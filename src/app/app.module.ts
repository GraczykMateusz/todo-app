import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/tasks/task-for-the-day-view/task/task.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { TaskForTheDayViewComponent } from './components/tasks/task-for-the-day-view/task-for-the-day-view.component';
import { DaysViewComponent } from './components/tasks/days-view/days-view.component';
import { DayComponent } from './components/tasks/days-view/day/day.component';
import { environment } from '../environments/environment';
import { AddTaskViewComponent } from './components/tasks/add-task-view/add-task-view.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainDashboardComponent,
    TaskForTheDayViewComponent,
    DaysViewComponent,
    DayComponent,
    AddTaskViewComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (!environment.production) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    }),
    FormsModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
