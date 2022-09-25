import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Agendae API')
    .setDescription('Documentação oficial da API Agendae.')
    .setVersion('1.0')
    .setContact(
      'Marllef H. A. Freitas',
      'http://gitgub.com/marllef',
      'marllef.alves@gmail.com',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/v1/docs', app, document, {
    customfavIcon: './assets/logo.png',
    customSiteTitle: 'Agendae API | Documentação',
  });
  await app.listen(3005);
}

bootstrap();
