import { Injectable } from '@angular/core';
import {backendUrl} from '../config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

    constructor(private http: HttpClient) {
    }

    findAirports(): Observable<any> {
        return this.http.get(backendUrl + '/airports');
    }
}
