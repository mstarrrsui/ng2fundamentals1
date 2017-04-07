import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import { HopsListComponent } from "./ingredients/hops-list.component";
import { HopsItemComponent } from "./ingredients/hops-item.component";
import { NavBarComponent } from "./nav/navbar.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    HopsListComponent,
    HopsItemComponent,
    NavBarComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
