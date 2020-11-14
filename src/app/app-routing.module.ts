import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerHomePageComponent} from './page/player-home-page/player-home-page.component';
import {OrganizerHomePageComponent} from './page/organizer-home-page/organizer-home-page.component';
import {TournamentComponent} from './page/tournament/tournament.component';

const routes: Routes = [
  { path: 'playersHomePage', component: PlayerHomePageComponent },
  { path: 'organizersHomePage', component: OrganizerHomePageComponent },
  { path: 'tournament/search', component: TournamentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
