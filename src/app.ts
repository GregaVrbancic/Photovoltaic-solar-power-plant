import {Component, bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';

import {Nav} from './components/nav/nav';
import {Weather} from './components/weather/weather';
import {Estimate} from './components/estimate/estimate';

@Component({
	selector: 'app',
	templateUrl: 'src/app.html',
	directives: [Nav, Weather, Estimate]
})

export class AppComponent {}

bootstrap(AppComponent, HTTP_BINDINGS);