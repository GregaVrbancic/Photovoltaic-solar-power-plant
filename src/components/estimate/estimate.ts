import {Component, NgFor} from 'angular2/angular2';

import {EstimateService} from '../../services/estimateService';

@Component({
	selector: 'estimate',
	templateUrl: 'Photovoltaic-solar-power-plant/src/components/estimate/estimate.html',
	bindings: [EstimateService],
	directives: [NgFor]
})

export class Estimate {
	
	estimation: Object;
	months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Avg', 'Sep', 'Oct', 'Nov', 'Dec'];

	constructor(public estimateService: EstimateService) {

		estimateService
			.getEstimation()
			.subscribe(
				data => this.estimation = data,
				err => this.logError(err),
				() => console.log('getEstimation() Complete')
			);
	}

	logError(err) {
		console.error('There was an error: ' + err);
	}

}