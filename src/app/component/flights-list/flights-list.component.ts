import {Component, OnInit} from '@angular/core';
import {BasicFlight} from '../../model/basic-flight';
import {FlightsMockService} from '../../service/flights.mock.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-flights-list',
    templateUrl: './flights-list.component.html',
    styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

    flights: BasicFlight[];

    constructor(flightsMock: FlightsMockService, activeRoute: ActivatedRoute, private router: Router) {
        const sourceACode = activeRoute.snapshot.params['sourceACode'];
        const sourceBCode = activeRoute.snapshot.params['sourceBCode'];
        this.flights = flightsMock.findFlights(sourceACode, sourceBCode);
    }

    ngOnInit() {
    }

    goToMainScreen() {
        this.router.navigate(['/']);
    }
}
