import { TestBed } from '@angular/core/testing';

import { HttpOrganizerService } from './http-organizer.service';

describe('HttpOrganizerService', () => {
  let service: HttpOrganizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpOrganizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
