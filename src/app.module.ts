import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeEntity } from './employee/employee.entity/employee.entity';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'password',
      database: 'employee_db',
      entities: [
        EmployeeEntity,
      ],
      // entities: ['../typeorm/entities/*.ts'],

      synchronize: true,
    }),
    EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
