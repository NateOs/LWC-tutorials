import { LightningElement, track } from "lwc";

export default class EmployeeInfo extends LightningElement {
  @track show = true;
  @track age;
  @track name;
  @track salary;

  nameHandler(event) {
    this.name = event.target.value;
  }
  ageHandler(event) {
    this.age = event.target.value;
  }
  salaryHandler(event) {
    this.salary = event.target.value;
  }
  saveButtonHandler() {
    this.show = !this.show;
  }
}
