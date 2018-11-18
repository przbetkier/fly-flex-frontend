import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {AirportService} from '../../service/airport.service';
import {Airport} from '../../model/airport';
import {FlightsConnectService} from '../../service/flights-connect.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

    loading: boolean;
    noConnections: boolean;
    loadingDestinations = false;

    public airports: Airport[];
    public destinations: Airport[];
    public you: string;
    public friend: string;
    public selectedDestination: Airport;
    public days: number;

    constructor(private router: Router, airportService: AirportService, private flightService: FlightsConnectService) {
        this.loading = true;
        airportService.findAirports().subscribe((response: any) => {
                this.airports = response.airports;
                this.loading = false;
            },
            (error) => {
                console.log(error);
                this.loading = false;
            });
    }

    isDestinationVisible(): boolean {
        return !(isNullOrUndefined(this.destinations)) && !this.noConnections;
    }

    canSearch(): boolean {
        return (!isNullOrUndefined(this.you) && !isNullOrUndefined(this.friend));
    }

    navigate() {
      if (isNullOrUndefined(this.selectedDestination)) {
        this.router.navigateByUrl(`/flights/${this.you}/${this.friend}`);
      } else {
        this.router.navigateByUrl(`/flights/${this.you}/${this.friend}/${this.selectedDestination}`);
      }
    }

    yourAirportChanged(): void {
        this.airportChanged();
    }

    friendAirportChanged(): void {
        this.airportChanged();
    }

    private airportChanged() {
        if (this.canFetchDestinations()) {
            this.loadingDestinations = true;
            this.flightService.findConnections(this.you, this.friend).subscribe((response: any) => {
                    this.destinations = response.connections;
                    this.noConnections = this.destinations.length === 0;
                    this.loadingDestinations = false;
                },
                (error) => {
                    console.log(error);
                    this.loadingDestinations = false;
                });
        }
    }

    private canFetchDestinations(): boolean {
        return !(isNullOrUndefined(this.you) || isNullOrUndefined(this.friend));
    }
}
