import {Injectable} from "@angular/core";
import {Quote} from "../domain/quote";
import {QuoteServiceInterface} from "../domain/quote-service.interface";

@Injectable()
export class QuoteServiceUsingMockData implements QuoteServiceInterface {
  public getQuote(): Quote {
    return Quote.fromRecord({
      author: 'Tester',
      text: 'Test Quote'
    })
  }
}
