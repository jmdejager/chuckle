import {QuoteServiceUsingNorrisAPI} from "./quote-service-using-norris-API";
import {Quote, QuoteAuthor, QuoteText} from "../domain/quote";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('QuoteServiceUsingNorrisAPI', () => {

  let httpController: HttpTestingController;
  let service: QuoteServiceUsingNorrisAPI;

  const mockJokeResult = {
    "categories": [],
    "created_at": "2020-01-05 13:42:26.991637",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "Fg_fj5Z7Qz21fpZKDVLlhQ",
    "updated_at": "2020-01-05 13:42:26.991637",
    "url": "https://api.chucknorris.io/jokes/Fg_fj5Z7Qz21fpZKDVLlhQ",
    "value": "Chuck Norris once made a 367 yard putt with a ping-pong ball."
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuoteServiceUsingNorrisAPI],
    });
    service = TestBed.inject(QuoteServiceUsingNorrisAPI);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('#getQuote should return quote', () => {

    Promise.resolve(service.getQuote()).then(quote => {
      expect(quote).toBeInstanceOf(Quote);

      expect(quote.author).toBeInstanceOf(QuoteAuthor);
      expect(quote.author.toString()).toBe('Chuck Norris');

      expect(quote.text).toBeInstanceOf(QuoteText);
      expect(quote.text.toString()).toBe('Chuck Norris once made a 367 yard putt with a ping-pong ball.');
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `https://api.chucknorris.io/jokes/random`,
    });

    req.flush(mockJokeResult);

  });

});
