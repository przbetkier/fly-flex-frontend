import {Outbound} from './outbound';

export class Route {
  constructor(public firstOutbound: Outbound,
              public secoundOutbound: Outbound) {}
}
