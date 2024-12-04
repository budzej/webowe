import { TestBed } from '@angular/core/testing';

import { ObliczanieService } from './obliczanie.service';

describe('ObliczanieService', () => {
  let service: ObliczanieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObliczanieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
