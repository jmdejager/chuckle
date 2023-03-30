import {inject, Injectable} from "@angular/core";
import {Quote} from "../domain/quote";
import {QuoteServiceInterface} from "../domain/quoteService.interface";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, map} from "rxjs";

interface NorrisApiContract {
  categories: string[],
  created_at: string,
  icon_url: string,
  id: string,
  updated_at: string,
  url: string,
  value: string,
}

@Injectable()
export class QuoteServiceUsingNorrisAPI implements QuoteServiceInterface {

  private httpClient: HttpClient = inject(HttpClient);

  public getQuote(): Promise<Quote> {
    return firstValueFrom(this.httpClient.get<NorrisApiContract>('https://api.chucknorris.io/jokes/random').pipe(
      map((res) => Quote.fromRecord({author: 'Chuck Norris', text: res.value}))
    ));
  }
}
