import {Component, Input} from '@angular/core';
import {Airport} from '../../model/airport';

@Component({
  selector: 'app-basic-flight',
  templateUrl: './basic-flight.component.html',
  styleUrls: ['./basic-flight.component.css']
})
export class BasicFlightComponent {

  @Input()
  flight: Airport;

}
