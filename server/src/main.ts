import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const options = new DocumentBuilder()
    .setTitle('Shakespearean Pokemon')
    .setDescription('TBA')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS
  app.enableCors();

  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
