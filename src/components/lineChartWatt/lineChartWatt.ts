import {Component, View, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/angular2';

import {charts} from '../../components/charts/index';
import {FeedService} from '../../services/feedService';

@Component({
	selector: 'line-chart-watt',
	templateUrl: 'src/components/lineChartWatt/lineChartWatt.html',
	directives: [charts, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
	bindings: [FeedService]
})

export class LineChartWatt {
	private lineChartType: string = 'Line';
	private lineChartLabels: Array<any> = [];
	private lineChartData: Array<any> = [[]];
	private lineChartOptions: any = {
		pointHitDetectionRadius: 1
	};
	constructor(public feedService: FeedService) {
		feedService
			.getTotalWattFeed()
			.subscribe(
				data => this.digestData(data),
				err => this.logError(err),
				() => console.log('getTotalWattFeed() Complete')
			);
		
		
	}

	chartClicked(e: any) {
		console.log(e);
	}

	chartHovered(e: any) {
		console.log(e);
	}

	digestData(data) {
		console.log('received data:' + data.feeds);
		//clear labels and data
		//this.lineChartLabels = [];
		this.lineChartData = [[]];
		for (var i = data.feeds.length-50; i < data.feeds.length; i++) {
			//set labels
			var date = new Date(data.feeds[i].created_at)
			this.lineChartLabels.push(date.getDate() + '/' + (date.getMonth()+1) + ' ' + date.getHours() + ':' + date.getMinutes());
			console.log('created at: ' + new Date(data.feeds[i].created_at));
			//set chart data
			this.lineChartData[0].push(data.feeds[i].field2);
		}
	}

	logError(err) {
		console.error('There was an error: ' + err);
	}

}