import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoritesComponent} from './favorites.component';
import {QuoteComponent} from "../../components/quote/quote.component";
import {FavoritesRoutingModule} from "./favorites-routing.module";

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    QuoteComponent
  ]
})
export class FavoritesModule {
}
