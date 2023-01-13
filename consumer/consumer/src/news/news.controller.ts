/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, OnModuleInit, Post } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { News } from './news.schema';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController implements OnModuleInit {
  constructor(private readonly newsService: NewsService) {}
  async onModuleInit() {
    // const context = await this.getOxuAz();

    //console.log(context.length)
    //news to be sent to rabbitmq channels
    //await this.writeData(context);
    //console.log('newsController initalized');
  }
  @Get()
  async getNews(): Promise<News[]> {
    return this.newsService.getNews();
  }
  @Post()
  async addNews(@Body() createNewsDto: CreateNewsDto): Promise<News> {
    return this.newsService.addNews(
      createNewsDto.heading,
      createNewsDto.context,
    );
  }
  // @Get('/oxuaz')
  // async getOxuAz() : Promise<string[]>{
  //     let context: string[];
  //    await axios.get("https://oxu.az", { headers: {"Accept-Encoding": "gzip,deflate,compress" }},).then((res)=>
  //     {
  //         const $ = load(res.data);
  //         const Attrubutes = $('.news-i').children('.news-i-inner').children('.news-i-content');
  //         const content = Attrubutes.children('.title').toArray().map(
  //             x =>
  //             {
  //                 return  [$(x).text(), $(x).parent().find('.when-time').text(), $(x).parent().find('.when').children('.when-date').text()].join(' ')
  //             });

  //         context = content;
  //      });
  //      return context;
  //     //console.log(response);
  // }
  @Post('postData')
  async writeData(context: string[]) {
    const listOfNews: News[] = [];
    //console.log(context);
    (await context).forEach((x) =>
      listOfNews.push(new News(x.substring(0, 5), x)),
    );
    this.newsService.addNewsBulk(listOfNews);
  }
}
