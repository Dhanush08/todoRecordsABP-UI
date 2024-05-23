import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRecordsComponent } from './todo-records.component';

describe('TodoRecordsComponent', () => {
  let component: TodoRecordsComponent;
  let fixture: ComponentFixture<TodoRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
