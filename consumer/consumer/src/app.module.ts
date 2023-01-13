import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { NewsService } from './news/news.service';
import { NewsRepository } from './news/news.repository';

@Module({
  imports: [
    NewsModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: 'mongodb://127.0.0.1:27017/nestJs' }),
    }),
    ClientsModule.register([
      {
        name: 'News_Service',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'news_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
