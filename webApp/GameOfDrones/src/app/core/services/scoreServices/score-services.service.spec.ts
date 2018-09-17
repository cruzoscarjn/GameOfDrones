import { TestBed } from '@angular/core/testing';

import { ScoreServicesService } from './score-services.service';

describe('ScoreServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoreServicesService = TestBed.get(ScoreServicesService);
    expect(service).toBeTruthy();
  });
});
