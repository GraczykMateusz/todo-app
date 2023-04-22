import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskForTheDayView } from './task-for-the-day-view.component';

describe('TaskForTheDayComponent', () => {
  let component: TaskForTheDayView;
  let fixture: ComponentFixture<TaskForTheDayView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskForTheDayView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskForTheDayView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
