import { Component, OnInit } from '@angular/core';
import {HttpOrganizerService} from '../../services/http-organizer.service';
import {Organizer} from '../../models/organizer';
import * as _ from 'lodash';

@Component({
  selector: 'app-organizer-profile',
  templateUrl: './organizer-profile.component.html',
  styleUrls: ['./organizer-profile.component.css']
})
export class OrganizerProfileComponent implements OnInit {

  organizerData: any;
  organizerData2: any;
  organizerService: HttpOrganizerService;
  organizerId: number;
  organizerImagePath: string;

  constructor(private httpOrganizerService: HttpOrganizerService ) {}

  ngOnInit(): void {
    this.organizerId = 1;
    this.retrieveOrganizer(this.organizerId);
    this.retrieveOrganizer2(2);
    this.organizerImagePath = 'assets/tomellis.jpg';
  }

  retrieveOrganizer(id: number): void {
    this.httpOrganizerService.getOrganizer(id)
      .subscribe((response: Organizer) => {
        this.organizerData = {} as Organizer;
        this.organizerData = _.cloneDeep(response);
        console.log(response);
        console.log(this.organizerData);
      });
  }

  retrieveOrganizer2(id: number): void {
    this.httpOrganizerService.getOrganizer(id)
      .subscribe((response: Organizer) => {
        this.organizerData2 = {} as Organizer;
        this.organizerData2 = _.cloneDeep(response);
        console.log(response);
        console.log(this.organizerData2);
      });
  }

}
