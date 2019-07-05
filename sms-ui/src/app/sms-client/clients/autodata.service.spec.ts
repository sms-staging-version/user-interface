import { TestBed } from '@angular/core/testing';

import { AutodataService } from './autodata.service';

describe('AutodataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutodataService = TestBed.get(AutodataService);
    expect(service).toBeTruthy();
  });
});
