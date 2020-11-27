import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {HttpPlayerService} from '../../services/http-player.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  player: any;
  constructor(private tokenStorageService: TokenStorageService, private playerService: HttpPlayerService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.player = this.playerService.getPlayer(1);
  }
}
