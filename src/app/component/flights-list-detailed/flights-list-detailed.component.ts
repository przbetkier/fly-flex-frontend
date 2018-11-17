import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Routes} from '../../model/routes';
import {Route} from '../../model/route';
import {Outbound} from '../../model/outbound';
import {Airport} from '../../model/airport';
import {DateInfo} from '../../model/date-info';
import {PriceInfo} from '../../model/price-info';

@Component({
  selector: 'app-flights-list-detailed',
  templateUrl: './flights-list-detailed.component.html',
  styleUrls: ['./flights-list-detailed.component.css']
})
export class FlightsListDetailedComponent implements OnInit {

  loading: boolean;

  public routes =
    [
      new Route(
        new Outbound(
          new Airport('POZ', 'Poznań'),
          new Airport('WAR', 'Warsaw'),
          new DateInfo('2018-10-10', '2018-10-15'),
          new PriceInfo(40, 120)
        ),
        new Outbound(
          new Airport('BXL', 'Berlin'),
          new Airport('WAR', 'Warsaw'),
          new DateInfo('2018-10-10', '2018-10-15'),
          new PriceInfo(200, 310)
        ),
      ),
      new Route(
        new Outbound(
          new Airport('POZ', 'Poznań'),
          new Airport('WAR', 'Warsaw'),
          new DateInfo('2018-10-10', '2018-10-15'),
          new PriceInfo(40, 120)
        ),
        new Outbound(
          new Airport('BXL', 'Berlin'),
          new Airport('WAR', 'Warsaw'),
          new DateInfo('2018-10-10', '2018-10-15'),
          new PriceInfo(200, 310)
        ),
      ),
      new Route(
        new Outbound(
          new Airport('POZ', 'Poznań'),
          new Airport('WAR', 'Warsaw'),
          new DateInfo('2018-10-10', '2018-10-15'),
          new PriceInfo(40, 120)
        ),
        new Outbound(
          new Airport('BXL', 'Berlin'),
          new Airport('WAR', 'Warsaw'),
          new DateInfo('2018-10-10', '2018-10-15'),
          new PriceInfo(200, 310)
        ),
      )
    ];

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  goBack() {
    this.router.navigate(['flights/POZ/POZ']);
  }

}
