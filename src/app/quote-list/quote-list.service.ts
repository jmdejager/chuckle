import { Injectable } from '@angular/core';
import {bufferCount, Observable, Subject} from "rxjs";
import {Quote} from "../../domain/quote";

@Injectable()
export class QuoteListService {
  private addQuoteSubject = new Subject<Quote>();
  public quotes$: Observable<Quote[]> = this.addQuoteSubject.pipe(
    bufferCount(10, 1)
  );
  public addQuote(quote: Quote){
    this.addQuoteSubject.next(quote);
  }
}
