import {Component, Input} from '@angular/core';
import {Airport} from '../../model/airport';

@Component({
  selector: 'app-single-flight',
  templateUrl: './single-flight.component.html',
  styleUrls: ['./single-flight.component.css']
})
export class SingleFlightComponent {

  @Input() from: Airport;
  @Input() to: Airport;
  @Input() date: string;
  @Input() price: number;
  @Input() currencyCode: string;

}
