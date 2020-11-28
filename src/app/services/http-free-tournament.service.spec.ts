import { TestBed } from '@angular/core/testing';

import { HttpFreeTournamentService } from './http-free-tournament.service';

describe('HttpFreeTournamentService', () => {
  let service: HttpFreeTournamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFreeTournamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
