import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from 'src/admin/entities/admin.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'curd',
          entities: [UserEntity, AdminEntity],
          synchronize: true, // false means tabele will not change . if you make it true everytime when you restart all previous data will be delete
          logging: true,
      })]
})
export class DatabaseModule {}
