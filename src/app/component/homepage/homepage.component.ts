import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public airports;
  public you;
  public friend;

  ngOnInit() {
    this.airports = [
      {value: 'POZ', viewValue: 'Poznan'},
      {value: 'BER', viewValue: 'Berlin'},
      {value: 'LON', viewValue: 'London'}
    ];
  }

  constructor(private router: Router) {
  }

  navigate() {
    console.log(`/flights/${this.you}/${this.friend}`);
    // this.router.navigateByUrl(`/flights/${this.you}/${this.friend}`);
  }
}
