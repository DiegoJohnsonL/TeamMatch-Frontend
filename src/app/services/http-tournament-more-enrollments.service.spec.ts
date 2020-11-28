import { TestBed } from '@angular/core/testing';

import { HttpTournamentMoreEnrollmentsService } from './http-tournament-more-enrollments.service';

describe('HttpTournamentMoreEnrollmentsService', () => {
  let service: HttpTournamentMoreEnrollmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTournamentMoreEnrollmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
