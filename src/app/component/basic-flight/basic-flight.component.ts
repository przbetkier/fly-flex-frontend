import {Component, Input, OnInit} from '@angular/core';
import {BasicFlight} from '../../model/basic-flight';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basic-flight',
  templateUrl: './basic-flight.component.html',
  styleUrls: ['./basic-flight.component.css']
})
export class BasicFlightComponent implements OnInit {

  @Input()
  flight: BasicFlight;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToDetails() {
    this.router.navigate([`/flights/POZ/POZ/POZ`]);
  }

}
