import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerHomePageComponent } from './page/player-home-page/player-home-page.component';
import { OrganizerHomePageComponent } from './page/organizer-home-page/organizer-home-page.component';
import { TeamsComponent } from './page/teams/teams.component';
import { SponsorsComponent } from './page/sponsors/sponsors.component';

const routes: Routes = [
  { path: '', redirectTo: '/playersHomePage', pathMatch: 'full'},
  { path: 'playersHomePage', component: PlayerHomePageComponent },
  { path: 'organizersHomePage', component: OrganizerHomePageComponent },
  { path: 'createTeam', component: TeamsComponent },
  { path: 'sponsors', component: SponsorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
