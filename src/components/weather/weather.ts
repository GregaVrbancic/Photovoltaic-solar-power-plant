import {Component} from 'angular2/angular2';

import {WeatherService} from '../../services/weatherService';

@Component({
	selector: 'weather',
	templateUrl: 'src/components/weather/weather.html',
	bindings: [WeatherService]
})

export class Weather {
	weather: Object;

	constructor(public weatherService: WeatherService) {

		weatherService
			.getCurrentWeather()
			.subscribe(
				data => this.weather = data,
				err => this.logError(err),
				() => console.log('getCurrentWeather() Complete')
			);

		setInterval(() => {
			weatherService
				.getCurrentWeather()
				.subscribe(
					data => this.weather = data,
					err => this.logError(err),
					() => console.log('getCurrentWeather() Complete')
				);
        }, 30000);
	}

	logError(err) {
		console.error('There was an error: ' + err);
	}
}