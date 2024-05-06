import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModel } from './user.model';
import { UserEntity } from './user';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'curd',
      entities: [UserEntity],
      synchronize: true,
  }), UserModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}