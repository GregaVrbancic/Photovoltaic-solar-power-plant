import {Component} from 'angular2/angular2';

import {EstimateService} from '../../services/estimateService';
import {FeedService} from '../../services/feedService';

@Component({
	selector: 'savings',
	templateUrl: 'Photovoltaic-solar-power-plant/src/components/savings/savings.html',
	bindings: [EstimateService, FeedService]
})

export class Savings {
	price: number;
	watts: number;

	constructor(public estimateService: EstimateService, public feedService: FeedService) {
		estimateService
			.getPriceRate()
			.subscribe(
			data => this.parseToNumber(data),
			err => this.logError(err),
			() => console.log('getPriceRate() Complete')
			);

		feedService
			.getTotalWattFeed()
			.subscribe(
			data => this.getComulativeWatts(data),
			err => this.logError(err),
			() => console.log('getTotalWattFeed() Complete')
			);

		setInterval(() => {
			estimateService
				.getPriceRate()
				.subscribe(
				data => this.parseToNumber(data),
				err => this.logError(err),
				() => console.log('getPriceRate() Complete')
				);

			feedService
				.getTotalWattFeed()
				.subscribe(
				data => this.getComulativeWatts(data),
				err => this.logError(err),
				() => console.log('getTotalWattFeed() Complete')
				);
        }, 30000);
	}

	parseToNumber(data) {
		var priceStr = data.results[0].rate;
		this.price = priceStr.substring(0, 5);
	}

	getComulativeWatts(data) {
		this.watts = data.feeds[data.feeds.length - 1].field2;
	}

	logError(err) {
		console.error('There was an error: ' + err);
	}
}