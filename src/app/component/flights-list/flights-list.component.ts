import {Component, Input, OnInit} from '@angular/core';
import {BasicFlight} from '../../model/basic-flight';
import {FlightsMockService} from '../../service/flights.mock.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights: BasicFlight[];

  constructor(flightsMock: FlightsMockService) {
    this.flights = flightsMock.findFlights();
  }

  ngOnInit() {
  }

}
