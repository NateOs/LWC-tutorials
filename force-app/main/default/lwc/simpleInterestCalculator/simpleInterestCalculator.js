import { LightningElement, track } from "lwc";

export default class SimpleInterestCalculator extends LightningElement {
  principal = 0;
  rate = 0;
  time = 0;
  @track interest = 0;

  timeChangeHandler(event) {
    this.time = parseInt(event.target.value, 10);
  }
  rateChangeHandler(event) {
    this.rate = parseInt(event.target.value, 10);
  }
  principalChangeHandler(event) {
    this.principal = parseInt(event.target.value, 10);
  }

  simpleInterestHandler() {
    this.interest =
      "Simple interest is :"(this.principal * this.rate * this.time) / 100;
  }
}
