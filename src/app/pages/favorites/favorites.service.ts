import {inject, Injectable} from '@angular/core';
import {FavoriteQuotesRepositoryInterface} from "../../../domain/favorite-quotes-repository.interface";
import {BehaviorSubject} from "rxjs";
import {Quote} from "../../../domain/quote";

@Injectable()
export class FavoritesService {

  private favoriteQuotesSubject = new BehaviorSubject<Quote[]>([]);
  public favoriteQuotes$ = this.favoriteQuotesSubject.asObservable();

  private favoriteQuotesRepository = inject<FavoriteQuotesRepositoryInterface>(FavoriteQuotesRepositoryInterface)

  constructor() {
    const favorites = this.favoriteQuotesRepository.getFavorites();
    this.favoriteQuotesSubject.next(favorites);
  }

  public removeFavorite(quote: Quote) {
    this.favoriteQuotesRepository.removeFavorite(quote);
    const newFavorites = this.favoriteQuotesRepository.getFavorites();
    this.favoriteQuotesSubject.next(newFavorites);
  }
}
