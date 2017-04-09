import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule }    from "@angular/http";

import { AppComponent }  from "./app.component";
import { HopsListComponent } from "./ingredients/hops-list.component";
import { HopsItemComponent } from "./ingredients/hops-item.component";
import { NavBarComponent } from "./nav/navbar.component";
import { IngredientService } from "./ingredients/shared/ingredient.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule ],
  declarations: [
    AppComponent,
    HopsListComponent,
    HopsItemComponent,
    NavBarComponent
    ],
  providers: [ IngredientService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
