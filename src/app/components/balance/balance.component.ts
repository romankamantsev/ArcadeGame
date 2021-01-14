import { Component, Output, EventEmitter } from "@angular/core";
import { BalanceService } from "../../services/balance-service";

@Component({
  selector: "app-balance",
  templateUrl: "./balance.component.html",
  styleUrls: ["./balance.component.css"]
})
export class BalanceComponent {
  @Output() private viewHistory = new EventEmitter();

  public historyToggle: boolean = false;

  constructor(public balanceService: BalanceService) {}

  public onViewHistory(): void {
    this.historyToggle = !this.historyToggle;
    this.viewHistory.emit();
  }
}
