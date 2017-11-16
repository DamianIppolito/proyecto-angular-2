import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { appRoutingProviders, routing } from "./app.routing";

import {PruebasPipe} from "./pipes/pruebas.pipe";

import { RestaurantesListComponent } from './components/restaurantes-list.component';
import { RestaurantesDetailComponent } from './components/restaurantes-detail.component';
import { RestauranteAddComponent } from './components/restaurante-add.component';
import { RestauranteEditComponent } from './components/restaurante-edit.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [
    AppComponent,
    RestaurantesListComponent,
    RestaurantesDetailComponent,
    RestauranteAddComponent,
    RestauranteEditComponent,
    PruebasPipe
  ],
  providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
