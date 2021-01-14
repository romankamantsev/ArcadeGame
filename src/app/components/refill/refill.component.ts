import { Component, Output, EventEmitter } from "@angular/core";
import { BalanceService } from "../../services/balance-service";

@Component({
  selector: "app-refill",
  templateUrl: "./refill.component.html",
  styleUrls: ["./refill.component.css"]
})
export class RefillComponent {
  amount: number = 1;
  constructor(private balanceService: BalanceService) {}

  onInput(event: any) {
    this.amount = parseInt(event.target.value) || 0;
  }

  onRefill() {
    this.balanceService.replenish(this.amount);
  }
}
