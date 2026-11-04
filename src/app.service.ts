import { Injectable } from '@nestjs/common';
import { slugify, doGoodThingsQuote } from '@rambabu-patidar2/utility-sdk';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  toSlug(title: string): string {
    return slugify(title);
  }

  getQuote(): string {
    return doGoodThingsQuote();
  }
}
