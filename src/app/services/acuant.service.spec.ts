import { TestBed, inject } from '@angular/core/testing';

import { AcuantService } from './acuant.service';

describe('AcuantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcuantService]
    });
  });

  it('should be created', inject([AcuantService], (service: AcuantService) => {
    expect(service).toBeTruthy();
  }));
});
