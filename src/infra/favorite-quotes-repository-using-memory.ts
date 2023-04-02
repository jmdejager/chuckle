import {Injectable} from "@angular/core";
import {Quote} from "../domain/quote";
import {FavoriteQuotesRepositoryInterface} from "../domain/favorite-quotes-repository.interface";

@Injectable()
export class FavoriteQuotesRepositoryUsingMemory implements FavoriteQuotesRepositoryInterface {

  private favorites: Quote[] = [];

  public addFavorite(quote: Quote): void {
    if (this.favorites.length >= 10) throw Error('Cannot have more than 10 favorites')
    this.favorites.push(quote);
  }

  public getFavorites(): Quote[] {
    return this.favorites;
  }

  public removeFavorite(quote: Quote): void {
    this.favorites = this.favorites.filter(x => x !== quote)
  }
}
