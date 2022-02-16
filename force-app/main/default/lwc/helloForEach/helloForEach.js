import { LightningElement } from "lwc";

export default class HelloForEach extends LightningElement {
  contacts = [
    {
      Id: 1,
      Name: "Amy Taylor",
      Title: "Sales Representative"
    },
    {
      Id: 2,
      Name: "Lisa Smith",
      Title: "Support Engineer"
    },
    {
      Id: 3,
      Name: "Pete Jones",
      Title: "Developer"
    }
  ];
}
