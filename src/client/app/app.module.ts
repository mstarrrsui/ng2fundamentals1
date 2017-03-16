import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HopsListComponent } from './ingredients/hops-list.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    HopsListComponent,
    NavBarComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
