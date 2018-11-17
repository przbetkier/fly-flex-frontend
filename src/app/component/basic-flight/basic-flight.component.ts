import {Component, Input} from '@angular/core';
import {Airport} from '../../model/airport';

@Component({
    selector: 'app-basic-flight',
    templateUrl: './basic-flight.component.html',
    styleUrls: ['./basic-flight.component.css']
})
export class BasicFlightComponent {

    @Input()
    flight: Airport;

    private flightImgMapping = {
        'Kraków': 'krakow',
        'Warszawa-Modlin': 'warszawa-modlin',
        'Londyn-Luton': 'londyn',
        'Londyn-Stansted': 'londyn',
        'Berlin-Schönefeld': 'berlin',
        'Barcelona-Girona': 'barcelona',
        'Lanzarote': 'lancarote',
        'Alicante': 'alicante',
        'Malaga': 'malaga',
        'Gdańsk': 'gdansk'
    };

    findFlightImg(): string {
        const imgName = this.flightImgMapping[this.flight.name] || 'default';
        return '/assets/airports/' + imgName + '.jpg';
    }


}
