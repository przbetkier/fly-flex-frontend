import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FlightsConnectService} from '../../service/flights-connect.service';
import {ConnectionsResponse} from '../../model/connections-response';
import {Airport} from '../../model/airport';

@Component({
    selector: 'app-flights-list',
    templateUrl: './flights-list.component.html',
    styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

    loading: boolean;
    sourceACode: string;
    sourceBCode: string;
    days: string;
    offset: string;

    flights: Airport[];

    constructor(flightService: FlightsConnectService, activeRoute: ActivatedRoute, private router: Router) {
        this.sourceACode = activeRoute.snapshot.params['sourceACode'];
        this.sourceBCode = activeRoute.snapshot.params['sourceBCode'];
        this.days = activeRoute.snapshot.params['days'];
        this.offset = activeRoute.snapshot.params['offset'];
        flightService.findConnections(this.sourceACode, this.sourceBCode).subscribe((response: ConnectionsResponse) => {
                this.flights = response.connections;
                this.loading = false;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    ngOnInit() {
        this.loading = true;
    }

    goToMainScreen() {
        this.router.navigate(['/']);
    }

    navigateToDetails(targetCode: string) {
      this.router.navigate([`/flights/${this.sourceACode}/${this.sourceBCode}/${targetCode}/${this.days}/${this.offset}`]);
    }
}
