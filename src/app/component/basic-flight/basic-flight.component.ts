import {Component, Input, OnInit} from '@angular/core';
import {BasicFlight} from '../../model/basic-flight';

@Component({
  selector: 'app-basic-flight',
  templateUrl: './basic-flight.component.html',
  styleUrls: ['./basic-flight.component.css']
})
export class BasicFlightComponent implements OnInit {

  @Input()
  flight: BasicFlight;

  constructor() { }

  ngOnInit() {
  }

}
