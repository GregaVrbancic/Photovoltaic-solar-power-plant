import {Component, bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';

import {Nav} from './components/nav/nav';
import {Weather} from './components/weather/weather';
import {LineChartWatt} from './components/lineChartWatt/lineChartWatt';
import {LineChartVolt} from './components/lineChartVolt/lineChartVolt';
import {Estimate} from './components/estimate/estimate';
import {Savings} from './components/savings/savings';
import {SystemInfo} from './components/systemInfo/systemInfo';

@Component({
	selector: 'app',
	templateUrl: 'src/app.html',
	directives: [Nav, Weather, LineChartWatt, LineChartVolt, Estimate, Savings, SystemInfo]
})

export class AppComponent {}

bootstrap(AppComponent, HTTP_BINDINGS);