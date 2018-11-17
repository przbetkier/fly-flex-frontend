import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface Airport {
  name: string;
  iataCode: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  airports: Airport[] = [
    {name: 'Poznan', iataCode: 'Poznan (POZ)'},
    {name: 'Berlin', iataCode: 'Berlin (BXL)'}
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigate() {
    this.router.navigateByUrl('/flights');
  }
}
