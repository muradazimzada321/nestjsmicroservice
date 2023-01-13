import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
export declare class AppController {
    private readonly appService;
    private readonly client;
    constructor(appService: AppService, client: ClientProxy);
    getHello(): Promise<string>;
    getNews(): Promise<string[]>;
    sendNews(): Promise<any>;
}
