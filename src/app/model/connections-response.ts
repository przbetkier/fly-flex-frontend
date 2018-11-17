import {Airport} from './airport';

export class ConnectionsResponse {
    firstIata: string;
    secondIata: string;
    connections: Airport[];
}
