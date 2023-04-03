import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/tasks-dashboard/task/task.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TasksDashboardComponent } from './components/tasks-dashboard/tasks-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DashboardComponent,
    TasksDashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
