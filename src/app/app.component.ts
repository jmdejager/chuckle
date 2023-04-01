import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild
} from '@angular/core';
import {QuoteListComponent} from "./quote-list/quote-list.component";
import {QuoteServiceInterface} from "../domain/quote-service.interface";
import {Subject, takeUntil, timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {

  @ViewChild(QuoteListComponent) private quoteList?: QuoteListComponent;
  private stopQuoteStream$ = new Subject<void>();

  public quoteService = inject<QuoteServiceInterface>(QuoteServiceInterface)

  public ngAfterViewInit(): void {
    this.fillQuotes();
  }

  private fillQuotes(){
    for (let i = 0; i < 10; i++) {
      this.addQuote();
    }
  }

  public addQuote() {
    Promise.resolve(this.quoteService.getQuote()).then(
      (quote) => this.quoteList?.service.addQuote(quote)
    )
  }

  public startQuoteStream() {
    this.stopQuoteStream$.next();
    timer(0, 5000).pipe(
      takeUntil(this.stopQuoteStream$)
    ).subscribe(() => this.addQuote())
  }

  public stopQuoteStream() {
    this.stopQuoteStream$.next();
  }
}
