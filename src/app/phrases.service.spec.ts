import { TestBed } from '@angular/core/testing';

import { PhrasesService } from './phrases.service';

describe('PhrasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhrasesService = TestBed.get(PhrasesService);
    expect(service).toBeTruthy();
  });
});
