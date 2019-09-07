import { TestBed } from '@angular/core/testing';

import { ResourceFactoryService } from './resource-factory.service';

describe('ResourceFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceFactoryService = TestBed.get(ResourceFactoryService);
    expect(service).toBeTruthy();
  });
});
