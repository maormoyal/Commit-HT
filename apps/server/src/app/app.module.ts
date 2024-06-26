import { Module } from '@nestjs/common';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import * as env from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { Connection } from 'mongoose';

env.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '..', '..', 'client', 'dist'),
    //   exclude: ['/api*'],
    // }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: getConnectionToken(),
      useValue: Connection,
    },
  ],
})
export class AppModule {}
