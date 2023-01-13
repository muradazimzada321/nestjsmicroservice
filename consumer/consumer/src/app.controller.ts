import { Controller, Get, Inject } from '@nestjs/common';
import { EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { findIndex } from 'rxjs';
import { News } from './news/news.schema';
import { NewsService } from './news/news.service';
@Controller()
export class AppController {
  constructor(private readonly newsService: NewsService) {}
  @Get('/news')
  @EventPattern('sendNews')
  getNotifications(@Payload() data: string[]) {
    // const channel = context.getChannelRef();
    // const originalMsg = context.getMessage();
    console.log(data);
    const newsArray = data.map((x) => {
      return new News(x.substring(0, 10), x);
    });
    this.newsService.addNewsBulk(newsArray);
    //  channel.ack(originalMsg);
  }
}
