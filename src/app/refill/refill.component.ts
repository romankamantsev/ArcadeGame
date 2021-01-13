import { Component } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-refill",
  templateUrl: "./refill.component.html",
  styleUrls: ["./refill.component.css"]
})
export class RefillComponent {
  amount: number = 1;

  @Output() refill = new EventEmitter();

  onInput(event: any) {
    this.amount = parseInt(event.target.value);
  }
}
