import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerHomePageComponent } from './organizer-home-page.component';

describe('OrganizerHomePageComponent', () => {
  let component: OrganizerHomePageComponent;
  let fixture: ComponentFixture<OrganizerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizerHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
