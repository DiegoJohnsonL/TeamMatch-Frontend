import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { HttpSponsorService } from '../../services/http-sponsor.service';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { Sponsor } from '../../models/sponsor';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit, AfterViewInit {
  @ViewChild('sponsorForm', { static: false })
  sponsorForm: NgForm;
  sponsorData: Sponsor;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'url', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isEditMode = false;
  constructor(private httpSponsorService: HttpSponsorService) {
    this.sponsorData = {} as Sponsor;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getAllSponsors();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllSponsors(): void {
    this.httpSponsorService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
  editItem(element): void {
    this.sponsorData = _.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit(): void {
    this.isEditMode = false;
    this.sponsorForm.resetForm();
  }
  deleteItem(id): void {
    this.httpSponsorService.deleteItem(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Sponsor) => {
        return o.id !== id ? o : false;
      });
    });
  }
  addSponsor(): void {
    const newSponsor = {
      name: this.sponsorData.name,
      url: this.sponsorData.url};
    this.httpSponsorService.createItem(newSponsor).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }
  updateSponsor(): void {
    this.httpSponsorService.updateItem(this.sponsorData.id, this.sponsorData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((o: Sponsor) => {
          if (o.id === response.id){
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      });
  }
  onSubmit(): void {
    if (this.sponsorForm.form.valid) {
      if (this.isEditMode) {
        this.updateSponsor();
      } else {
        this.addSponsor();
      }
    } else {
      console.log('Invalid Data');
    }
  }
}
