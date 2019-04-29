import { TestBed } from '@angular/core/testing';

import { StagingmanagerService } from './stagingmanager.service';

describe('StagingmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StagingmanagerService = TestBed.get(StagingmanagerService);
    expect(service).toBeTruthy();
  });
});
