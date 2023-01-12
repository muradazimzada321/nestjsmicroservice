"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const enums_1 = require("@nestjs/microservices/enums");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: enums_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'news_queue',
            queueOptions: {
                durable: false
            }
        }
    });
    await app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map