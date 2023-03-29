import {Quote} from "./quote";

export interface QuoteServiceInterface {
  getQuote(): Quote | Promise<Quote>
}
