import {Injectable, bind} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';

import {_properties} from '../properties';

@Injectable()
export class EstimateService {
	ESTIMATE_API: string;
	PRICE_RATE_API: string;

	constructor(public http: Http) {
		this.ESTIMATE_API = _properties.estimateAPI;
		this.PRICE_RATE_API = _properties.priceRateAPI;
	}

	getPriceRate(): any {
		return this.http.get(this.PRICE_RATE_API)
			.map(res => res.json());
	}

	getEstimation(): any {
		return this.http.get(this.ESTIMATE_API)
			.map(res => res.json());
	}
}