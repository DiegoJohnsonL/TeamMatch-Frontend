import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpPlayerService} from '../../services/http-player.service';
import {Player} from '../../models/player';
import * as _ from 'lodash';

@Component({
  selector: 'app-player-home-page',
  templateUrl: './player-home-page.component.html',
  styleUrls: ['./player-home-page.component.css']
})
export class PlayerHomePageComponent implements OnInit {
  playerData: Player = new Player();
  playerId: number;
  constructor(private httpPlayerService: HttpPlayerService) { }

  ngOnInit(): void {
    this.playerId = 1;
    this.retrievePlayer(this.playerId);
  }
  retrievePlayer(id: number): void {
    this.httpPlayerService.getPlayer(id).subscribe((response: Player) => {
        this.playerData = {} as Player;
        this.playerData = _.cloneDeep(response);
        console.log(response);
        console.log(this.playerData);
      });
  }
}
