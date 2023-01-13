/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { load } from 'cheerio';

@Injectable()
export class AppService {
 
  async getHello(): Promise<string> {
    return 'Hello World!';
  }
  async scrapeData(): Promise<string[]> {
    let context: string[];
    await axios
      .get('https://oxu.az', {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      })
      .then((res) => {
        const $ = load(res.data);
        const Attrubutes = $('.news-i')
          .children('.news-i-inner')
          .children('.news-i-content');
        const content = Attrubutes.children('.title')
          .toArray()
          .map((x) => {
            return [
              $(x).text(),
              $(x).parent().find('.when-time').text(),
              $(x).parent().find('.when').children('.when-date').text(),
            ].join(' ');
          });
        context = content;
      });
    return context;
  }
  
}
