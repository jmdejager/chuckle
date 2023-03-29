import {QuoteServiceUsingNorrisAPI} from "./quoteServiceUsingNorrisAPI";
import {Quote} from "../domain/quote";

describe('QuoteServiceUsingNorrisAPI', () => {

  let service: QuoteServiceUsingNorrisAPI;
  beforeEach(() => { service = new QuoteServiceUsingNorrisAPI(); });

  it('#getQuote should return quote', () => {
    Promise.resolve(service.getQuote()).then( quote => expect(quote).toBeInstanceOf(Quote))
  });

});
