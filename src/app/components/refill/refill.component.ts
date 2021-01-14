import { Component } from "@angular/core";
import { BalanceService } from "../../services/balance-service";

@Component({
  selector: "app-refill",
  templateUrl: "./refill.component.html",
  styleUrls: ["./refill.component.css"]
})
export class RefillComponent {
  public amount: number = 1;
  constructor(private balanceService: BalanceService) {}

  public onInput(event: any) {
    this.amount = parseInt(event.target.value) || 0;
  }

  public onRefill() {
    this.balanceService.replenish(this.amount);
  }
}
