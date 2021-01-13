import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { HistoryComponent } from './history/history.component';
import { BalanceComponent } from './balance/balance.component';
import { RefillComponent } from './refill/refill.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, HistoryComponent, BalanceComponent, RefillComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
