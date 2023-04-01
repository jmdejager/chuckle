import {Quote, QuoteAuthor, QuoteText} from "../domain/quote";
import {TestBed} from "@angular/core/testing";
import {QuoteServiceUsingMockData} from "./quote-service-using-mock-data";

describe('QuoteServiceUsingMockData', () => {

  let service: QuoteServiceUsingMockData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteServiceUsingMockData],
    });
    service = TestBed.inject(QuoteServiceUsingMockData);
  });

  it('#getQuote should return mock quote', () => {

    Promise.resolve(service.getQuote()).then(quote => {
      expect(quote).toBeInstanceOf(Quote);

      expect(quote.author).toBeInstanceOf(QuoteAuthor);
      expect(quote.author.toString()).toBe('Tester');

      expect(quote.text).toBeInstanceOf(QuoteText);
      expect(quote.text.toString()).toBe('Test Quote');
    });

  });

});
