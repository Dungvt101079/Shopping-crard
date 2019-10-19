import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ListCardComponent } from "./list-card/list-card.component";
import { BottomCardComponent } from "./bottom-card/bottom-card.component";
import { HeaderCardComponent } from "./header-card/header-card.component";

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    BottomCardComponent,
    HeaderCardComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
