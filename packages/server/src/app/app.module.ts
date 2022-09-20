import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
