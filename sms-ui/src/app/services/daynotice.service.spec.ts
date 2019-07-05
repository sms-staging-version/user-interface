import { TestBed } from '@angular/core/testing';

import { DaynoticeService } from './daynotice.service';

describe('DaynoticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaynoticeService = TestBed.get(DaynoticeService);
    expect(service).toBeTruthy();
  });
});
