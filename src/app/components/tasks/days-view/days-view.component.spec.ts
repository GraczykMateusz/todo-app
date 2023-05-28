import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysViewComponent } from './days-view.component';

describe('DaysViewComponent', () => {
  let component: DaysViewComponent;
  let fixture: ComponentFixture<DaysViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
