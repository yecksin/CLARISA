import { NestFactory } from '@nestjs/core';
import * as bodyparser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyparser.urlencoded({ limit: '100mb', extended: true }));
  app.use(bodyparser.json({ limit: '100mb' }));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
