import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BalanceService {
  balance: number = 0;
  history = [];

  getBalance() {
    return this.balance;
  }

  getHistory() {
    return this.history.slice();
  }

  replenish(amount: number) {
    if (amount > 0) {
      this.balance += amount;
      this.history.push(`Card Refill: +${this.getAmountString(amount)}`);
      console.log(`Card Refill: +${this.getAmountString(amount)}`);
    }
  }

  withdraw(amount: number, gameName: string) {
    if (amount <= 0) return;
    if (amount >= this.balance) {
      this.balance -= amount;
      this.history.push(`${gameName}: -${this.getAmountString(amount)}`);
      console.log(`${gameName}: -${this.getAmountString(amount)}`);
    } else throw new Error("Insufficient funds to write off!");
  }

  private getAmountString(amount: number) {
    return amount + (amount > 1 ? "tokens" : "token");
  }
}
