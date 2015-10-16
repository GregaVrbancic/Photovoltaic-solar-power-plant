import {Component} from 'angular2/angular2';

import {_properties} from '../../properties';

@Component({
	selector: 'nav',
	templateUrl: 'src/components/nav/nav.html'
})

export class Nav {
	title: string;

	constructor() {
		this.title = _properties.projectName;
	}
}