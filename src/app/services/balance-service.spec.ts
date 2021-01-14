//import {inject, TestBed} from '@angular/core/testing';
import { BalanceService } from "./balance-service";

describe("BalanceService", () => {
  let service: BalanceService;

  beforeEach(() => {
    service = new BalanceService();
  });

  it("Service initialized correctly ", () => {
    expect(service.getBalance()).toBe(0);
    expect(service.getHistory().length).toBe(0);
  });

  it("Not possible to replenish by negative value ", () => {
    service.replenish(-5);
    expect(service.getBalance()).toBe(0);
    expect(service.getHistory().length).toBe(0);
  });

  it("Possible to replenish with balance and history updated correctly", () => {
    service.replenish(1);
    expect(service.getBalance()).toBe(1);
    expect(service.getHistory().length).toBe(1);
    expect(service.getHistory()[0]).toBe("Card Refill: +1 token");

    service.replenish(2);
    expect(service.getHistory().length).toBe(2);
    expect(service.getHistory()[1]).toBe("Card Refill: +2 tokens");
  });

  it("Not possible to withdraw amount bigger than current balance or zero amount", () => {
    try {
      expect(function() {
        service.withdraw(5, "a game");
      }).toThrowError("Insufficient funds to write off!");
    } catch {}

    service.withdraw(0, "a game");
    expect(service.getHistory().length).toBe(0);
  });

  it("Possible to withdraw with balance and history updated correctly", () => {
    service.replenish(3);
    service.withdraw(1, "a game");
    expect(service.getBalance()).toBe(2);
    expect(service.getHistory().length).toBe(2);
    expect(service.getHistory()[1]).toBe("a game: -1 token");

    service.withdraw(2, "a game");
    expect(service.getBalance()).toBe(0);
    expect(service.getHistory().length).toBe(3);
    expect(service.getHistory()[2]).toBe("a game: -2 tokens");
  });
});
