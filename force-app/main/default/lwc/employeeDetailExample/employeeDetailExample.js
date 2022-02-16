import { LightningElement, track } from 'lwc';

export default class EmployeeDetailExample extends LightningElement {
	@track name = 'John Doe'
	@track age = '0'
	@track salary = 1

	nameHandler(event) {
		this.name = event.target.value;
	}
	ageHandler(event) {
		this.age = event.target.value;
	}
	salaryHandler(event) {
		this.salary = event.target.value;
	}
}