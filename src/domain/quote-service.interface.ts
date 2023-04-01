import {Quote} from "./quote";
import {InjectionToken} from "@angular/core";

export const QuoteServiceInterface = new InjectionToken('QuoteServiceInterface');
export interface QuoteServiceInterface {
  getQuote(): Quote | Promise<Quote>
}
