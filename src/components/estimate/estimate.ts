import {Component, NgFor} from 'angular2/angular2';

import {EstimateService} from '../../services/estimateService';

@Component({
	selector: 'estimate',
	templateUrl: 'src/components/estimate/estimate.html',
	bindings: [EstimateService],
	directives: [NgFor]
})

export class Estimate {
	price: string;
	estimation: Object;
	months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Avg', 'Sep', 'Oct', 'Nov', 'Dec'];

	constructor(public estimateService: EstimateService) {
		estimateService
			.getPriceRate()
			.subscribe(
				data => this.price = data.results[0].rate,
				err => this.logError(err),
				() => console.log('getPriceRate() Complete')
			);

		estimateService
			.getEstimation()
			.subscribe(
				data => this.estimation = data,
				err => this.logError(err),
				() => console.log('getEstimation() Complete')
			);

		setInterval(() => {

        }, 2000);
	}

	logError(err) {
		console.error('There was an error: ' + err);
	}

}