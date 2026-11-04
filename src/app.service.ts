import { Injectable } from '@nestjs/common';
import { slugify, tellJoke, doGoodThingsQuote } from '@rambabu-patidar2/utility-sdk';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  toSlug(title: string): string {
    return slugify(title);
  }

  getJoke(): string {
    return tellJoke();
  }
  getQuote(): string {
    return doGoodThingsQuote();
  }
}
