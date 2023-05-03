import { TestBed } from '@angular/core/testing';

import { ServeiProdService } from './servei-prod.service';

describe('ServeiProdService', () => {
  let service: ServeiProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
