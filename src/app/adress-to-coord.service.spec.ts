import { TestBed } from '@angular/core/testing';

import { AdressToCoordService } from './adress-to-coord.service';

describe('AdressToCoordService', () => {
  let service: AdressToCoordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdressToCoordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
