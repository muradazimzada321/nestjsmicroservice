/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController } from './news.controller';
import { NewsRepository } from './news.repository';
import { NewsSchema } from './news.schema';
import { NewsService } from './news.service';
@Module({
  imports: [
   MongooseModule.forFeature([{ name: 'News', schema: NewsSchema }])],
   controllers: [NewsController],
   providers:[NewsRepository, NewsService, NewsController]
  })
export class NewsModule{}