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
    'Gdańsk': 'gdansk',
    'Wrocław': 'wroclaw',
    'Oslo-Torp': 'oslo',
    'Rzym-Ciampino': 'rzym',
    'Kolonia': 'koln',
    'Zadar': 'zadar',
    'Mediolan-Bergamo': 'medional',
    'Kijów-Boryspol': 'kijow',
    'Barcelona-El Prat': 'barcelona',
    'Lizbona': 'lisbon',
    'Sztokholm-Skavsta': 'sztokholm',
    'Rodos': 'rodos',
    'Malta': 'malta',
    'Aalborg': 'Aalborg',
    'Aarhus': 'aarhus',
    'Abardeen': 'abardeen',
    'Agadir': 'agadir',
    'Alghero': 'alghero',
    'Almeria': 'almeria',
    'Amman Jordan': 'amman-jordan',
    'Belfast-International': 'belfast',
    'Bristol': 'bristol',
    'Dublin': 'dublin',
    'Wilno': 'wilno'

  };

  findFlightImg(): string {
    const imgName = this.flightImgMapping[this.flight.name] || 'default';
    return '/assets/airports/' + imgName + '.jpg';
  }


}
