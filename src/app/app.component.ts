import { Component } from "@angular/core";
import { BalanceService } from "./services/balance-service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  playerName = "John Doe";
  historyToggle: boolean = false;

  constructor(private balanceService: BalanceService) {}

  onRefill(amount: number) {
    this.balanceService.replenish(amount);
  }

  onHistoryToggle() {
    this.historyToggle = !this.historyToggle;
  }
}
