import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsConnectService {
  backendUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  findConnections(sourceACode: string, sourceBCode: string): Observable<any> {
    return this.http.get(this.backendUrl + `/connections?firstIata=${sourceACode}&secondIata=${sourceBCode}`);
  }
}
