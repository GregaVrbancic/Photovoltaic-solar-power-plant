import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {Weather} from '../../components/weather/weather';
import {LineChartWatt} from '../../components/lineChartWatt/lineChartWatt';
import {LineChartVolt} from '../../components/lineChartVolt/lineChartVolt';
import {Estimate} from '../../components/estimate/estimate';
import {Savings} from '../../components/savings/savings';
import {SystemInfo} from '../../components/systemInfo/systemInfo';

@Component({
	selector: 'home',
	templateUrl: 'Photovoltaic-solar-power-plant/src/components/home/home.html',
	directives: [CORE_DIRECTIVES, Weather, LineChartWatt, LineChartVolt, Estimate, Savings, SystemInfo]
})

export class Home {}