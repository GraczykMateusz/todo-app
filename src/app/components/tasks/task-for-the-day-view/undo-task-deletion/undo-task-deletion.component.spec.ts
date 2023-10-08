import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoTaskDeletionComponent } from './undo-task-deletion.component';

describe('UndoTaskDeletionComponent', () => {
  let component: UndoTaskDeletionComponent;
  let fixture: ComponentFixture<UndoTaskDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndoTaskDeletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndoTaskDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
