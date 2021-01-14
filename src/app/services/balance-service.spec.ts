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
});
