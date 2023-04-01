import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuoteComponent} from './quote/quote.component';
import {QuoteListComponent} from './quote-list/quote-list.component';
import {QuoteServiceInterface} from "../domain/quote-service.interface";
import {QuoteServiceUsingNorrisAPI} from "../infra/quote-service-using-norris-API";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    QuoteServiceUsingNorrisAPI,
    {
      provide: QuoteServiceInterface,
      useClass: QuoteServiceUsingNorrisAPI
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
