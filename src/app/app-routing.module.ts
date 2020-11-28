import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganizersComponent} from './pages/organizers/organizers.component';
import {PlayerHomePageComponent} from './pages/player-home-page/player-home-page.component';
import {OrganizerHomePageComponent} from './pages/organizer-home-page/organizer-home-page.component';
import {TeamsComponent} from './pages/teams/teams.component';
import {AddTeamplayerComponent} from './pages/add-teamplayer/add-teamplayer.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {AppComponent} from './app.component';
import {OrganizerTournamentComponent} from './pages/organizer-tournament/organizer-tournament.component';
import  { TournamentsComponent} from './pages/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'playerHomePage', component: PlayerHomePageComponent },
  { path: 'organizerHomePage', component: OrganizerHomePageComponent },
  { path: 'createTeam', component: TeamsComponent },
  { path: 'addTeamPlayer', component: AddTeamplayerComponent },
  { path: 'organizers', component: OrganizersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'profile', component: ProfileComponent},
  { path: 'organizers/:id/free-tournaments', component: TournamentsComponent },
  { path: 'player/organizers', component: OrganizerTournamentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent];
