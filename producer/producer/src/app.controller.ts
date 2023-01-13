/* eslint-disable prettier/prettier */
import { Controller, Get, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ClientProxy  } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,@Inject('News_Service') private readonly client: ClientProxy) {}

  @Get()
  getHello(): Promise<string> {
    return this.appService.getHello();
  }
  @Get('news')
  getNews(): Promise<string[]> {
    return this.appService.scrapeData();
  }
  @Get('sendNewsToQueue')
  async sendNews(): Promise<any> {
    const context = await this.appService.scrapeData();
    //console.log(context);
    //this.client.emit('sendNews', {data: JSON.stringify(context)}); 
    // return this.appService.sendNews(context);
    this.client.emit('sendNews', context);
    
  }
}
