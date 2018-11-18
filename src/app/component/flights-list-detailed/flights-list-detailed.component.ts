import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Route} from '../../model/route';
import {RoutesService} from '../../service/routes.service';

@Component({
  selector: 'app-flights-list-detailed',
  templateUrl: './flights-list-detailed.component.html',
  styleUrls: ['./flights-list-detailed.component.css']
})
export class FlightsListDetailedComponent implements OnInit {

  loading: boolean;
  sourceACode: string;
  sourceBCode: string;
  targetCode: string;
  routes: Route[];
  isEmpty = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private routesService: RoutesService) {
  }

  ngOnInit() {
    this.setUpCodes();
    this.loading = true;
    this.routesService.findRoutes(this.sourceACode, this.sourceBCode, this.targetCode)
      .subscribe(response => {
        console.log(response.routes);
        this.routes = response.routes;
        this.loading = false;
        if (this.routes.length === 0) {
          this.isEmpty = true;
        }
      });
  }

  private setUpCodes() {
    this.sourceACode = this.activatedRoute.snapshot.params['sourceACode'];
    this.sourceBCode = this.activatedRoute.snapshot.params['sourceBCode'];
    this.targetCode = this.activatedRoute.snapshot.params['targetCode'];
  }

  goBack() {
    this.router.navigate([`flights/${this.sourceACode}/${this.sourceBCode}`]);
  }

  sortByDate() {
    this.routes.sort((one, two) => (one.firstOutbound.date.departure < two.secondOutbound.date.departure ? -1 : 1));
  }

  public sortByPrice() {
    this.routes.sort((one, two) => (this.getTotalPrice(one) < this.getTotalPrice(two) ? -1 : 1));
  }

  public getTotalPrice(route: Route): number {
    return route.firstOutbound.price.returnWay + route.firstOutbound.price.oneWay +
      route.secondOutbound.price.returnWay + route.secondOutbound.price.oneWay;
  }
}
