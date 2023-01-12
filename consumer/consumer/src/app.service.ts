import { Inject, Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientProxy } from '@nestjs/microservices/client';
import { Observable } from 'rxjs';
import { NewsService } from './news/news.service';

@Injectable()
export class AppService {
  constructor(@Inject('News_Service') private readonly client: ClientProxy) {
    this.client.connect();
  }
  getHello(): string {
    return 'Hello World!';
  }
  @MessagePattern({ cmd: 'sendNews' })
  async accumulate(@Payload() data: Promise<string[]>) {
    console.log(data);
    this.client.emit<Promise<string[]>>;
    //get data
    //write to the db
    //NewsService.writeAll
    return data;
  }
}
