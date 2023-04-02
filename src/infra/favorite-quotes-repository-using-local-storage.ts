import {Injectable} from "@angular/core";
import {Quote, QuoteRecord} from "../domain/quote";
import {FavoriteQuotesRepositoryInterface} from "../domain/favorite-quotes-repository.interface";

@Injectable()
export class FavoriteQuotesRepositoryUsingLocalStorage implements FavoriteQuotesRepositoryInterface {

  public addFavorite(quote: Quote): void {
    const favorites: QuoteRecord[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    if(favorites.length >= 10) throw Error('Cannot have more than 10 favorites');
    favorites.push(quote.toRecord())
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  public getFavorites(): Quote[] {
    const favorites: QuoteRecord[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    return favorites.map((quoteRecord) => Quote.fromRecord(quoteRecord));
  }

  public removeFavorite(quote: Quote): void {
    const favorites: QuoteRecord[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    const filteredFavorites = favorites.filter(x => x.text !== quote.text.toString());
    localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
  }
}
