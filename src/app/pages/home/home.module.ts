import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {QuoteComponent} from "../../components/quote/quote.component";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    QuoteComponent,
  ]
})
export class HomeModule {
}
