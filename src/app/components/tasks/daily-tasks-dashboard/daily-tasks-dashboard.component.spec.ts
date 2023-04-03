import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTasksDashboardComponent } from './daily-tasks-dashboard.component';

describe('DailyTasksDashboardComponent', () => {
  let component: DailyTasksDashboardComponent;
  let fixture: ComponentFixture<DailyTasksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTasksDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTasksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
