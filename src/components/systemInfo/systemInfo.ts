import {Component} from 'angular2/angular2';

import {FeedService} from '../../services/feedService';

@Component({
	selector: 'system-info',
	templateUrl: 'Photovoltaic-solar-power-plant/src/components/systemInfo/systemInfo.html',
	bindings: [FeedService]
})

export class SystemInfo {
	system: Object;

	constructor(public feedService: FeedService) {
		feedService
			.getTotalWattFeed()
			.subscribe(
				data => this.system = data,
				err => this.logError(err),
				() => console.log('getTotalWattFeed() Complete')
			);
	}

	logError(err) {
		console.error('There was an error: ' + err);
	}
}