import {Component, Input, OnInit} from '@angular/core';
import {Route} from '../../model/route';

@Component({
  selector: 'app-detailed-flight',
  templateUrl: './detailed-flight.component.html',
  styleUrls: ['./detailed-flight.component.css']
})
export class DetailedFlightComponent implements OnInit {

  @Input() route: Route;

  constructor() {
  }

  ngOnInit() {
  }

}
