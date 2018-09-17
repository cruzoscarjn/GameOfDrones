import { TestBed } from '@angular/core/testing';

import { MovementServicesService } from './movement-services.service';

describe('MovementServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovementServicesService = TestBed.get(MovementServicesService);
    expect(service).toBeTruthy();
  });
});
