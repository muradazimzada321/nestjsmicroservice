"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const cheerio_1 = require("cheerio");
let AppService = class AppService {
    async getHello() {
        return 'Hello World!';
    }
    async scrapeData() {
        let context;
        await axios_1.default
            .get('https://oxu.az', {
            headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
        })
            .then((res) => {
            const $ = (0, cheerio_1.load)(res.data);
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
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map