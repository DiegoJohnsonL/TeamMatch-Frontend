import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Sponsor } from '../models/sponsor';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpSponsorService {
  // Sponsors Endpoint
  basePath = 'http://localhost:3000/api/sponsors';
  constructor(private http: HttpClient) { }
  // Http Default options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  // API Error handling
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, with body: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }
  // Create Sponsor
  createItem(item): Observable<Sponsor> {
    return this.http.post<Sponsor>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Sponsor by Id
  getItem(id): Observable<Sponsor> {
    return this.http.get<Sponsor>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Sponsor Data
  getList(): Observable<Sponsor> {
    return this.http.get<Sponsor>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Update Sponsor
  updateItem(id, item): Observable<Sponsor> {
    return this.http.put<Sponsor>(`${this.basePath}/${id}`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete Sponsor
  deleteItem(id): Observable<any> {
    return this.http.delete<Sponsor>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
