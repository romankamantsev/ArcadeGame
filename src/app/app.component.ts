import { Component } from "@angular/core";
import { BalanceService } from "./services/balance-service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  playerName = "John Doe";
  history = [];

  constructor(private balanceService: BalanceService) {}

  onRefill(amount: number) {
    this.balanceService.replenish(amount);
  }
}
