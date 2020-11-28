import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTournamentAddComponent } from './player-tournament-add.component';

describe('PlayerTournamentAddComponent', () => {
  let component: PlayerTournamentAddComponent;
  let fixture: ComponentFixture<PlayerTournamentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTournamentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTournamentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
