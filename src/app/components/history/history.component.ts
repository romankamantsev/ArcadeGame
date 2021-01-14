import { Component } from "@angular/core";
import { BalanceService } from "../../services/balance-service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent {
  history: Array<string>;

  constructor(public balanceService: BalanceService) {
    this.history = balanceService.getHistory();
  }
}
