import { TestBed } from '@angular/core/testing';

import { TodoRecordsService } from './todo-records.service';

describe('TodoRecordsService', () => {
  let service: TodoRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});