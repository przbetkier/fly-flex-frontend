import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Airport} from '../../model/airport';

@Component({
  selector: 'app-basic-flight',
  templateUrl: './basic-flight.component.html',
  styleUrls: ['./basic-flight.component.css']
})
export class BasicFlightComponent implements OnInit {

  @Input()
  flight: Airport;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToDetails() {
    this.router.navigate([`/flights/POZ/POZ/POZ`]);
  }

}
