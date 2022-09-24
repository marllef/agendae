import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { UserModule } from 'src/modules/user/user.module';
import { BusinessModule } from '~/modules/business/business.module';
import { ScheduleModule } from '~/modules/schedule/schedule.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,
    UserModule,
    BusinessModule,
    ScheduleModule,
  ],
  providers: [AppService],
})
export class AppModule {}
