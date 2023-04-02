import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuoteServiceInterface} from "../domain/quote-service.interface";
import {QuoteServiceUsingNorrisAPI} from "../infra/quote-service-using-norris-API";
import {HttpClientModule} from "@angular/common/http";
import {FavoriteQuotesRepositoryInterface} from "../domain/favorite-quotes-repository.interface";
import {FavoriteQuotesRepositoryUsingLocalStorage} from "../infra/favorite-quotes-repository-using-local-storage";
import { FavoritesModule } from './pages/favorites/favorites.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FavoritesModule,
    HomeModule,
  ],
  providers: [
    QuoteServiceUsingNorrisAPI,
    {
      provide: QuoteServiceInterface,
      useClass: QuoteServiceUsingNorrisAPI
    },
    {
      provide: FavoriteQuotesRepositoryInterface,
      useClass: FavoriteQuotesRepositoryUsingLocalStorage
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
