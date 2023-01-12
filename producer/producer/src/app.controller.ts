/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<string> {
    return this.appService.getHello();
  }
  @Get('news')
  getNews(): Promise<string[]> {
    return this.appService.scrapeData();
  }
  @Get('sendNewsToQueue')
  sendNews(): any {
    const context = this.appService.scrapeData();
    return this.appService.sendNews(context);
  }
}
