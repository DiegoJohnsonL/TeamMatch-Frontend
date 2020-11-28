import { TestBed } from '@angular/core/testing';

import { HttpTournamentEnrollmentService } from './http-tournament-enrollment.service';

describe('HttpTournamentEnrollmentService', () => {
  let service: HttpTournamentEnrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTournamentEnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
