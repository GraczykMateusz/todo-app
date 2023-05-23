import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskForTheDayViewComponent } from './task-for-the-day-view.component';

describe('TaskForTheDayViewComponent', () => {
  let component: TaskForTheDayViewComponent;
  let fixture: ComponentFixture<TaskForTheDayViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskForTheDayViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskForTheDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
