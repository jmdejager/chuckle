import {inject, Injectable} from '@angular/core';
import {bufferCount,  map, merge, Observable, Subject, takeUntil, timer} from "rxjs";
import {Quote} from "../../../domain/quote";
import {QuoteServiceInterface} from "../../../domain/quote-service.interface";
import {FavoriteQuotesRepositoryInterface} from "../../../domain/favorite-quotes-repository.interface";

@Injectable()
export class HomeService {

  private addQuoteSubject = new Subject<Quote>();
  public quotes$: Observable<Quote[]> = this.addQuoteSubject.pipe(
    bufferCount(10, 1)
  );

  private stopQuoteStream$ = new Subject<void>();
  private startQuoteStream$ = new Subject<void>();
  public quoteStreamRunning$ = merge(
    this.startQuoteStream$.pipe(map(() => true)),
    this.stopQuoteStream$.pipe(map(() => false)),
  );

  private quoteService = inject<QuoteServiceInterface>(QuoteServiceInterface);
  private favoriteQuotesRepository = inject<FavoriteQuotesRepositoryInterface>(FavoriteQuotesRepositoryInterface);

  public constructor() {
    //fill first 10 quotes
    for (let i = 0; i < 10; i++) {
      this.fetchQuote();
    }
  }

  public addQuote(quote: Quote) {
    this.addQuoteSubject.next(quote);
  }

  public fetchQuote() {
    Promise.resolve(this.quoteService.getQuote()).then(
      (quote) => this.addQuote(quote)
    )
  }

  public startQuoteStream() {
    this.startQuoteStream$.next();
    timer(0, 5000).pipe(
      takeUntil(merge(this.stopQuoteStream$, this.startQuoteStream$))
    ).subscribe(() => this.fetchQuote())
  }

  public stopQuoteStream() {
    this.stopQuoteStream$.next();
  }

  public makeFavorite(quote: Quote) {
    this.favoriteQuotesRepository.addFavorite(quote);
  }
}
