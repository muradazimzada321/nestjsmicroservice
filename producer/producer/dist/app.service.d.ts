import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private client;
    constructor(client: ClientProxy);
    getHello(): Promise<string>;
    scrapeData(): Promise<string[]>;
    sendNews(message: Promise<string[]>): Promise<import("rxjs").Observable<Promise<string[]>>>;
}
