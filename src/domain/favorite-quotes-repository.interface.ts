import {Quote} from "./quote";
import {InjectionToken} from "@angular/core";

export const FavoriteQuotesRepositoryInterface = new InjectionToken('FavoriteQuotesRepositoryInterface');
export interface FavoriteQuotesRepositoryInterface {
  addFavorite(quote: Quote): void;
  getFavorites(): Quote[]
  removeFavorite(quote: Quote): void;
}
