import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('slug')
  getSlug(@Query('title') title: unknown): { slug: string } {
    if (typeof title !== 'string') {
      throw new BadRequestException('title query parameter must be a single string');
    }
    return { slug: this.appService.toSlug(title) };
  }

  @Get('joke')
  getJoke(): string {
    return this.appService.getJoke();
  }
  @Get('quote')
  getQuote(): string {
    return this.appService.getQuote();
  }
}
