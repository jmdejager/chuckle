import {Injectable} from "@angular/core";
import {Quote} from "src/domain/quote";
import {QuoteServiceInterface} from "../domain/quoteService.interface";

@Injectable()
export class QuoteServiceUsingNorrisAPI implements QuoteServiceInterface {
  public getQuote(): Quote | Promise<Quote> {
    return Quote.fromRecord({author: ' ', text: ' '});
  }
}
