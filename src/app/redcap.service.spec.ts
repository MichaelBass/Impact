import { TestBed } from '@angular/core/testing';

import { RedcapService } from './redcap.service';

describe('RedcapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedcapService = TestBed.get(RedcapService);
    expect(service).toBeTruthy();
  });
});
