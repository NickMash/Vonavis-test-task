import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getStops(query: any): Observable <any> {
    const url = `${environment.URL}search/${query}`;

    return this.http.get(url).pipe(
      catchError((error): any => {
        throw error;
      }));
  }

  getPlan(id: any): Observable <any> {
    const url = `${environment.URL}plan/${id}`;

    return this.http.get(url).pipe(
      catchError((error): any => {
        throw error;
      }));
  }

}
