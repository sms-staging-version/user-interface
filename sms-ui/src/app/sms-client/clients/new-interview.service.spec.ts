import { TestBed } from '@angular/core/testing';

import { NewInterviewService } from './new-interview.service';

describe('NewInterviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewInterviewService = TestBed.get(NewInterviewService);
    expect(service).toBeTruthy();
  });
});
