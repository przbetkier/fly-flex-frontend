import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {backendUrl} from '../config';

@Injectable({
  providedIn: 'root'
})
export class FlightsConnectService {

  constructor(private http: HttpClient) {
  }

  findConnections(sourceACode: string, sourceBCode: string): Observable<any> {
    return this.http.get(backendUrl + `/connections?firstIata=${sourceACode}&secondIata=${sourceBCode}`);
  }
}
