import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public playerName = "John Doe";
  public historyToggle: boolean = false;

  public onHistoryToggle(): void {
    this.historyToggle = !this.historyToggle;
  }
}
