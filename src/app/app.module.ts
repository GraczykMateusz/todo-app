import { isDevMode, LOCALE_ID, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainDashboardComponent,
    TaskForTheDayViewComponent,
    DaysViewComponent,
    DayComponent,
    AddTaskViewComponent,
    LoginPageComponent
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
    provideAuth(() => {
      const auth = getAuth();
      if (!environment.production) {
        connectAuthEmulator(auth, 'http://localhost:9099');
      }
      return auth;
    }),
    FormsModule,
    BrowserModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: LOCALE_ID, useValue: 'PL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
