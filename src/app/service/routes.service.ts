import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {backendUrl} from '../config';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private httpClient: HttpClient) {
  }

  findRoutes(firstIata: string, secondIata: string, destinationIata, days: string, offset: string): Observable<any> {
    return this.httpClient.get(`${backendUrl}/routes?firstIata=${firstIata}&secondIata=${secondIata}&destinationIata=${destinationIata}&offset=${offset}&tripLength=${days}`);
  }
}
