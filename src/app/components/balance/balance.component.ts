import { Component } from "@angular/core";
import { BalanceService } from "../services/balance-service";

@Component({
  selector: "app-balance",
  templateUrl: "./balance.component.html",
  styleUrls: ["./balance.component.css"]
})
export class BalanceComponent {
  constructor(public balanceService: BalanceService) {}
}
