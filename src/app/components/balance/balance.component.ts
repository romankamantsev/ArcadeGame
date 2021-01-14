import { Component, Output, EventEmitter } from "@angular/core";
import { BalanceService } from "../../services/balance-service";

@Component({
  selector: "app-balance",
  templateUrl: "./balance.component.html",
  styleUrls: ["./balance.component.css"]
})
export class BalanceComponent {
  historyToggle: boolean = false;
  @Output() viewHistory = new EventEmitter();

  constructor(public balanceService: BalanceService) {}

  onViewHistory() {
    this.historyToggle = !this.historyToggle;
    this.viewHistory.emit();
  }
}
