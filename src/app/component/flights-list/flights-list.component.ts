import {Component, OnInit} from '@angular/core';
import {BasicFlight} from '../../model/basic-flight';
import {FlightsMockService} from '../../service/flights.mock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FlightsConnectService} from '../../service/flights-connect.service';
import {ConnectionsResponse} from '../../model/connections-response';

@Component({
    selector: 'app-flights-list',
    templateUrl: './flights-list.component.html',
    styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

    loading: boolean;

    flights: BasicFlight[];

    constructor(flightService: FlightsConnectService, activeRoute: ActivatedRoute, private router: Router) {
        const sourceACode = activeRoute.snapshot.params['sourceACode'];
        const sourceBCode = activeRoute.snapshot.params['sourceBCode'];
        flightService.findConnections(sourceACode, sourceBCode).subscribe((response: ConnectionsResponse) => {
                console.log('success');
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
}
