import { Component } from "@angular/core";
import { BalanceService } from "../../services/balance-service";
import { Game } from "./game";
import { gamesList } from "./gamesList";

@Component({
  selector: "app-games",
  templateUrl: "./games.component.html",
  styleUrls: []
})
export class GamesComponent {
  public amount: number = 1;
  public games: Array<Game> = gamesList;
  public selectedGameId: number = this.games[0] ? this.games[0].id : null;
  constructor(public balanceService: BalanceService) {}

  public onInput(event: any) {
    this.amount = parseInt(event.target.value) || 0;
  }

  public onPlay() {
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

  public canPlay() {
    return this.amount > 0 && this.amount <= this.balanceService.getBalance();
  }
}
