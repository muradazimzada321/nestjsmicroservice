/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums';
import { AppModule } from './app.module';
//import { Transport, ClientProxyFactory, ClientOptions } from "@nestjs/microservices";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
       urls: ['amqp://localhost:5672'],
       queue: 'news_queue',
       queueOptions : {
        durable: false 
       }
    }
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}

bootstrap();
