import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BalanceService {
  private balance: number = 0;
  private history: Array<string> = [];

  public getBalance(): number {
    return this.balance;
  }

  public getHistory(): Array<string> {
    return this.history.slice();
  }

  public replenish(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      this.history.push(`Card Refill: +${this.getAmountString(amount)}`);
    }
  }

  public withdraw(amount: number, gameName: string): void {
    if (amount <= 0) return;

    if (amount <= this.balance) {
      this.balance -= amount;
      this.history.push(`${gameName}: -${this.getAmountString(amount)}`);
    } else throw new Error("Insufficient funds to write off!");
  }

  private getAmountString(amount: number): string {
    return amount + (amount > 1 ? " tokens" : " token");
  }
}
