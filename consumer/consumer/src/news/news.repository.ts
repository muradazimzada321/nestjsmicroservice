/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, FilterQuery } from 'mongoose';
import { News, NewsDocument, NewsSchema } from './news.schema';
@Injectable()
export class NewsRepository {
  constructor(@InjectModel(News.name) private newsModel: Model<NewsDocument>) {}
  async findOne(newsFilterQuery: FilterQuery<News>): Promise<News> {
    return this.newsModel.findOne(newsFilterQuery);
  }
  async findAll(newsFilterQuery: FilterQuery<News>): Promise<News[]> {
    return this.newsModel.find(newsFilterQuery);
  }
  async create(news: News) {
    const newsCreated = new this.newsModel(news);
    return newsCreated.save();
  }
  async createBulk(news: News[]) {
    // Model.collection.insertMany(news,)
    const NEWS = mongoose.model('News', NewsSchema);
    NEWS.collection.insertMany(news);
  }
}
