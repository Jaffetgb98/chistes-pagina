import { TestBed } from '@angular/core/testing';

import { InfoPService } from './info-p.service';

describe('InfoPService', () => {
  let service: InfoPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
