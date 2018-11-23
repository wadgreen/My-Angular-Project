import { TestBed } from '@angular/core/testing';

import { TutionService } from './tution.service';

describe('TutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutionService = TestBed.get(TutionService);
    expect(service).toBeTruthy();
  });
});
