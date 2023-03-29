export class Quote {
  private constructor(
    public readonly text: QuoteText,
    public readonly author: QuoteAuthor,
  ) {
  }

  public static fromRecord(record: QuoteRecord): Quote {
    return new Quote(
      QuoteText.fromString(record.text),
      QuoteAuthor.fromString(record.author),
    )
  }
}

export interface QuoteRecord {
  text: string,
  author: string,
}

export class QuoteAuthor {

  private constructor(private readonly author: string) {
    if (!author) throw Error('quote author is empty');
    if (author.length > 150) throw Error('quote author too long');
  }

  public static fromString(author: string) {
    return new QuoteAuthor(author);
  }

  public toString() {
    return this.author;
  }

}

export class QuoteText {

  private constructor(private readonly text: string) {
    if (!text) throw Error('quote text is empty');
  }

  public static fromString(text: string) {
    return new QuoteText(text);
  }

  public toString() {
    return this.text;
  }

}

