/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { News } from './news.schema';
import { NewsRepository } from './news.repository';
@Injectable()
export class NewsService {
  constructor(private readonly newsRepository: NewsRepository) {}
  async getNews(): Promise<News[]> {
    return this.newsRepository.findAll({});
  }
  async addNews(heading: string, context: string): Promise<News> {
    return this.newsRepository.create(new News(heading, context));
  }
  async addNewsBulk(news: News[]) {
    return this.newsRepository.createBulk(news);
  }
}
