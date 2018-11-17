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

    flights: Airport[];

    constructor(flightService: FlightsConnectService, activeRoute: ActivatedRoute, private router: Router) {
        const sourceACode = activeRoute.snapshot.params['sourceACode'];
        const sourceBCode = activeRoute.snapshot.params['sourceBCode'];
        flightService.findConnections(sourceACode, sourceBCode).subscribe((response: ConnectionsResponse) => {
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
}
