import { TestBed } from '@angular/core/testing';

import { AssociateFeedbackService } from './associate-feedback.service';

describe('AssociateFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssociateFeedbackService = TestBed.get(AssociateFeedbackService);
    expect(service).toBeTruthy();
  });
});
