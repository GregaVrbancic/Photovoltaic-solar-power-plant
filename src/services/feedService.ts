import {Injectable, bind} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';

import {_properties} from '../properties';

@Injectable()
export class FeedService {
	TOTAL_WATT_FEED_API: string;
	AC_VOLTAGE_FEED_API: string;

	constructor(public http: Http) {
		this.TOTAL_WATT_FEED_API = _properties.totalWattFeedAPI;
		this.AC_VOLTAGE_FEED_API = _properties.ACVoltageFeedAPI;
	}

	getTotalWattFeed(): any {
		return this.http.get(this.TOTAL_WATT_FEED_API)
			.map(res => res.json());
	}

	getACVoltageFeed(): any {
		return this.http.get(this.AC_VOLTAGE_FEED_API)
			.map(res => res.json());
	}
}