import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { PlayersComponent } from './page/players/players.component';
import { OrganizersComponent } from './page/organizers/organizers.component';
import { TeamsComponent } from './page/teams/teams.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PlayerHomePageComponent } from './page/player-home-page/player-home-page.component';
import { OrganizerHomePageComponent } from './page/organizer-home-page/organizer-home-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddTeamplayerComponent } from './page/add-teamplayer/add-teamplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    OrganizersComponent,
    TeamsComponent,
    PlayerHomePageComponent,
    OrganizerHomePageComponent,
    AddTeamplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
