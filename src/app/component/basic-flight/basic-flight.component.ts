import {Component, Input, OnInit} from '@angular/core';
import {BasicFlight} from '../../model/basic-flight';
import {Airport} from '../../model/airport';

@Component({
  selector: 'app-basic-flight',
  templateUrl: './basic-flight.component.html',
  styleUrls: ['./basic-flight.component.css']
})
export class BasicFlightComponent implements OnInit {

  @Input()
  flight: Airport;

  constructor() { }

  ngOnInit() {
  }

}
