import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../../../services/tasks/tasks.service';
import { NewTask } from '../../../services/tasks/model/new-task';
import { UserService } from '../../../services/user/user.service';
import { DaysService } from '../../../services/days/days.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Day } from '../../../services/days/days';
import { OwnDate } from '../../../services/days/own-date';

@Component({
  selector: 'app-add-task-view',
  templateUrl: './add-task-view.component.html',
  styleUrls: ['./add-task-view.component.css']
})
export class AddTaskViewComponent implements OnInit, OnDestroy{
  
  private readonly userService: UserService = inject(UserService);
  private readonly taskService: TasksService = inject(TasksService);
  private readonly daysService: DaysService = inject(DaysService);
  
  private readonly _destroy$: Subject<any> = new Subject<any>();
  
  private readonly day$: Observable<Day> = this.daysService.currentDay
    .pipe(takeUntil(this._destroy$));
  
  
  protected ownDate: OwnDate = OwnDate.today();
  protected content: string = '';
  
  ngOnInit(): void {
    this.day$.subscribe(day => this.ownDate = day.ownDate);
  }
  
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  
  public addTask(): void {
    if (this.content == '' || this.content == null) {
      return;
    }
    if (this.content.trim() === '') {
      return;
    }
    const task: NewTask = new NewTask(this.content, this.userService.getUser(), this.ownDate);
    this.taskService.addTask(task)
      .then(() => this.content = '');
  }
}
