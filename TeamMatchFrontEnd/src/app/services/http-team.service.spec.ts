import { TestBed } from '@angular/core/testing';

import { HttpTeamService } from './http-team.service';

describe('HttpTeamService', () => {
  let service: HttpTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
