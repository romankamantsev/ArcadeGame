import { Component } from "@angular/core";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  playerName = "John Doe";
  historyToggle: boolean = false;



  onHistoryToggle() {
    this.historyToggle = !this.historyToggle;
  }
}
