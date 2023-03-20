import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeEntity } from './employee/employee.entity/employee.entity';
import { EmployeeModule } from './employee/employee.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        EmployeeEntity,
      ],
      synchronize: true,
    }), EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
