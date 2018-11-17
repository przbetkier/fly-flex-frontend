import {PriceInfo} from './price-info';
import {Airport} from './airport';
import {DateInfo} from './date-info';

export class Outbound {
  constructor(public departureAirport: Airport,
              public arrivalAirport: Airport,
              public date: DateInfo,
              public price: PriceInfo) {}
}
