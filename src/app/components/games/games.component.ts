import { Component } from "@angular/core";
import { BalanceService } from "../../services/balance-service";
import { gamesList } from "./gamesList";

@Component({
  selector: "app-games",
  templateUrl: "./games.component.html",
  styleUrls: []
})
export class GamesComponent {
  amount: number = 1;
  games = gamesList;
  selectedGameId = this.games[0] ? this.games[0].id : null;
  constructor(public balanceService: BalanceService) {}

  onInput(event: any) {
    this.amount = parseInt(event.target.value) || 0;
  }

  onPlay() {
    let game = this.games.find(g => g.id === this.selectedGameId);
    if (!game) {
      alert("Cannot find selected game!");
      return;
    }

    try {
      this.balanceService.withdraw(this.amount, game.name);
    } catch (e) {
      alert(e);
    }
  }

  canPlay() {
    return this.amount > 0 && this.amount <= this.balanceService.getBalance();
  }
}
