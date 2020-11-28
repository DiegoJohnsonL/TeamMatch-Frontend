import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganizersComponent} from './page/organizers/organizers.component';
import {PlayerHomePageComponent} from './page/player-home-page/player-home-page.component';
import {OrganizerHomePageComponent} from './page/organizer-home-page/organizer-home-page.component';
import {TeamsComponent} from './page/teams/teams.component';
import {AddTeamplayerComponent} from './page/add-teamplayer/add-teamplayer.component';
import {TournamentComponent} from './page/tournament/tournament.component';
import {OrganizerTournamentComponent} from './page/organizer-tournament/organizer-tournament.component';
import {PlayerTournamentAddComponent} from './page/player-tournament-add/player-tournament-add.component';


const routes: Routes = [
  { path: 'playersHomePage', component: PlayerHomePageComponent },
  { path: 'organizersHomePage', component: OrganizerHomePageComponent },
  { path: 'createTeam', component: TeamsComponent },
  { path: 'addTeamPlayer', component: AddTeamplayerComponent },
  { path: 'organizers', component: OrganizersComponent},
  { path: 'player/organizer/tournaments', component: TournamentComponent},
  { path: 'organizers/:id/free-tournaments', component: TournamentComponent},
  { path: 'player/organizers', component: OrganizerTournamentComponent},
  {path:  'player/:id/tournament', component: PlayerTournamentAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OrganizersComponent];
