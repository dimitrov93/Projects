import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBaordComponent } from './task-baord.component';

describe('TaskBaordComponent', () => {
  let component: TaskBaordComponent;
  let fixture: ComponentFixture<TaskBaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
