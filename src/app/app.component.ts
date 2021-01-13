import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  playerName = "John Doe";
  balance: number = 0;
  history = [];

  onRefill(amount: number) {
    //TODO move to balance service
    //and to history service
    if (amount > 0) {
      this.balance += amount;
      this.history.push("Card Refill " + amount);
      console.log("Card Refill " + amount);
    }
  }
}
