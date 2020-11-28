import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FreeTournament} from '../../models/free-tournament';
import {ProfessionalTournament} from '../../models/professional-tournament';
import {TournamentEnrollment} from '../../models/tournament-enrollment';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {HttpFreeTournamentService} from '../../services/http-free-tournament.service';
import {HttpProfessionalTournamentService} from '../../services/http-professional-tournament.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpTournamentEnrollmentService} from '../../services/http-tournament-enrollment.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class  TournamentsComponent implements OnInit ,AfterViewInit {

  @ViewChild('studentForm', {static: false})
  studentForm: NgForm;
  freeData: FreeTournament;
  professionalData: ProfessionalTournament;
  enrollmentData: TournamentEnrollment;
  studentId: number;
  dataSource = new MatTableDataSource();
  dataSourceProfessional = new MatTableDataSource();
  dataSourceEnrollment = new MatTableDataSource();
  defaultStudent = { id: 0, name: '' , description: '' , prize: '', publicTournament: null , code: '', maxTeams: null, organizerId: null  };
  displayedColumns: string[] = ['id', 'name',
    'description', 'prize', 'publicTournament', 'code', 'maxTeams', 'organizerId', 'actions'];
  displayedColumns2: string[] = ['id', 'name',
    'description', 'prize', 'publicTournament', 'code', 'maxTeams', 'enrollmentPlayer' , 'commissionOrganizer' , 'portChampion' , 'organizerId', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isEditMode = false;

  constructor(private httpFreeTournament: HttpFreeTournamentService, private httpProfessional: HttpProfessionalTournamentService ,
              private  httpEnrollment: HttpTournamentEnrollmentService , private router: Router, private route: ActivatedRoute) {
    this.freeData = {} as FreeTournament;
    this.professionalData = {} as ProfessionalTournament;
    this.enrollmentData = {} as TournamentEnrollment;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSourceProfessional.paginator = this.paginator;
    this.dataSourceEnrollment.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSourceProfessional.sort = this.sort;
    this.dataSourceEnrollment.sort = this.sort;
    this.studentId = Number(this.route.params.subscribe( params => {
      if (params.id) {
        const id = params.id;
        console.log(id);
        this.getAllFreeTournaments(id);
        this.getAllProfessionalTournaments(id);
        this.getAllEnrollmentsTournaments(id);
        this.isEditMode = true;
        return id;
      } else {
        this.isEditMode = false;
        return 0;
      }
    }));
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllFreeTournaments(id): void {
    this.httpFreeTournament.getListByOrganizerId(id).subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }
  getAllProfessionalTournaments(id): void {
    this.httpProfessional.getListByOrganizerId(id).subscribe((response: any) => {
      this.dataSourceProfessional.data = response;
      console.log(this.dataSourceProfessional.data);
    });
  }
  getAllEnrollmentsTournaments(id): void {
    this.httpEnrollment.getListByOrganizerId(id).subscribe((response: any) => {
      this.dataSourceEnrollment.data = response;
      console.log(this.dataSourceEnrollment.data);
    });
  }
  navigateToSelectedTournament(tournamentId): void {
    this.router.navigate([`/player/${tournamentId}/tournament`]).then(() => null);
  }

}
