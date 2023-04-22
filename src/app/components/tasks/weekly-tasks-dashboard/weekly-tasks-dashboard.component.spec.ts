import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTasksDashboardComponent } from './weekly-tasks-dashboard.component';

describe('WeeklyTasksDashboardComponent', () => {
  let component: WeeklyTasksDashboardComponent;
  let fixture: ComponentFixture<WeeklyTasksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyTasksDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyTasksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
