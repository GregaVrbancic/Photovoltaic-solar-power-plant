import {Injectable, bind} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';

import {_properties} from '../properties';

@Injectable()
export class WeatherService {
	CURRENT_WEATHER_API: string;

	constructor(public http: Http) {
		this.CURRENT_WEATHER_API = _properties.currentWeatherAPI;
	}

	getCurrentWeather(): any {
		return this.http.get(this.CURRENT_WEATHER_API)
			.map(res => res.json());
	}
}