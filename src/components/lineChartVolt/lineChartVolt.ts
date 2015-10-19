import {Component, View, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/angular2';

import {charts} from '../../components/charts/index';
import {FeedService} from '../../services/feedService'

@Component({
	selector: 'line-chart-volt',
	templateUrl: 'Photovoltaic-solar-power-plant/src/components/lineChartVolt/lineChartVolt.html',
	directives: [charts, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
	bindings: [FeedService]
})

export class LineChartVolt {
	private lineChartType: string = 'Line';
	private lineChartLabels: Array<any> = [];
	private lineChartData: Array<any> = [[]];
	private lineChartOptions: any = {
		pointHitDetectionRadius: 1
	};
	constructor(public feedService: FeedService) {
		feedService
			.getACVoltageFeed()
			.subscribe(
				data => this.digestData(data),
				err => this.logError(err),
				() => console.log('getTotalVoltFeed() Complete')
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
			this.lineChartData[0].push(data.feeds[i].field5);
		}
	}

	logError(err) {
		console.error('There was an error: ' + err);
	}

}