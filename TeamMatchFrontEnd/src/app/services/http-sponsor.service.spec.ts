import { TestBed } from '@angular/core/testing';

import { HttpSponsorService } from './http-sponsor.service';

describe('HttpSponsorService', () => {
  let service: HttpSponsorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSponsorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
