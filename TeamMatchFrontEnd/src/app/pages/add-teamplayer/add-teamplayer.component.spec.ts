import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamplayerComponent } from './add-teamplayer.component';

describe('AddTeamplayerComponent', () => {
  let component: AddTeamplayerComponent;
  let fixture: ComponentFixture<AddTeamplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
