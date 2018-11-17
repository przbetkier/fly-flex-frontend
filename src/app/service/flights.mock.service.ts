import { Injectable } from '@angular/core';
import {BasicFlight} from '../model/basic-flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsMockService {

  findFlights(): BasicFlight[] {
    const flights = [];

    const basicFlight = new BasicFlight();
    basicFlight.priceA = 40;
    basicFlight.priceB = 50;
    basicFlight.airportName = 'Berlin';
    basicFlight.date = '12/12/2018';

    flights.push(basicFlight);
    flights.push(basicFlight);

    return flights;
  }
}
