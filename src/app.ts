import {Component, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';

import {Home} from './components/home/home';
import {About} from './components/about/about';

import {_properties} from './properties';


@Component({
	selector: 'app',
	templateUrl: 'src/app.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/', as: 'Home', component: Home },
	{ path: '/about', as: 'About', component: About }
])

export class AppComponent {
	title: string;

	constructor() {
		this.title = _properties.projectName;
	}

}

bootstrap(AppComponent, [HTTP_BINDINGS, ROUTER_BINDINGS]);