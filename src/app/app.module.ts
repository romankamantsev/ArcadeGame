import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header.component";
import { HistoryComponent } from "./components/history/history.component";
import { BalanceComponent } from "./components/balance/balance.component";
import { RefillComponent } from "./components/refill/refill.component";
import { GamesComponent } from "./components/games/games.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoryComponent,
    BalanceComponent,
    RefillComponent,
    GamesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
