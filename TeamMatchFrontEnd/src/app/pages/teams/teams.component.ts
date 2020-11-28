import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Team} from '../../models/team';
import {NgForm} from '@angular/forms';
import {HttpTeamService} from '../../services/http-team.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  @ViewChild('teamForm', { static: false })
  teamForm: NgForm;
  isEditMode = false;
  teamId: number;
  teamData: Team = new Team();
  defaultTeam = { id: 0, name: '', teamSize: null, hoursPlayed: null, levelAverage: null};
  constructor(private httpTeamService: HttpTeamService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.teamId = Number(this.route.params.subscribe( params => {
      if (params.id) {
        const id = params.id;
        console.log(id);
        this.retrieveTeam(id);
        this.isEditMode = true;
        return id;
      } else {
        this.resetTeam();
        this.isEditMode = false;
        return 0;
      }
    }));
  }
  navigateToTeams(): void {
    this.router.navigate(['/teams']);
  }
  resetTeam(): void {
    this.teamData = this.defaultTeam;
  }
  retrieveTeam(id): void {
    this.httpTeamService.getTeam(id)
      .subscribe((response: Team) => {
        this.teamData = {} as Team;
        this.teamData = _.cloneDeep(response);
        console.log(response);
        console.log(this.teamData);
      });
  }
  addTeam(): void {
    const newTeam = {name: this.teamData.name, teamSize: this.teamData.teamSize, hoursPlayed: this.teamData.hoursPlayed, levelAverage: this.teamData.levelAverage};
    this.httpTeamService.createTeam(newTeam)
      .subscribe(() => {
        this.navigateToTeams();
      });
  }
  cancelEdit(): void {
    this.navigateToTeams();
  }

  updateTeam(): void {
    this.httpTeamService.updateTeam(this.teamData.id, this.teamData as Team)
      .subscribe(response => {
        console.log(response);
      });
    this.navigateToTeams();
  }
  onSubmit(): void {
    if (this.teamForm.form.valid) {
      console.log(this.teamData);
      if (this.isEditMode) {
        this.updateTeam();
      } else {
        this.addTeam();
      }
    } else {
      console.log('Invalid Data');
    }
  }

}
