import { LightningElement, track  } from 'lwc';

export default class HelloWorld extends LightningElement {
	@track greeting = 'World'; // track is like useState in react, rerenders occur when a tracked value changes
	changeHandler(event) {
		this.greeting = event.target.value;
	}
}