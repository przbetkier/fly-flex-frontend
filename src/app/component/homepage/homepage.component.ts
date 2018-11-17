import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {AirportService} from '../../service/airport.service';
import {Airport} from '../../model/airport';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

    loading: boolean;

    public airports: Airport[];
    public you: string;
    public friend: string;

    constructor(private router: Router, airportService: AirportService) {
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

    canSearch(): boolean {
        return (!isNullOrUndefined(this.you) && !isNullOrUndefined(this.friend));
    }

    navigate() {
        this.router.navigateByUrl(`/flights/${this.you}/${this.friend}`);
    }
}
