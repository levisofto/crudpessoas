import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './database/database.providers';
import { ConfigModule } from '@nestjs/config';
import 'reflect-metadata';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PeopleModule,
    TypeOrmModule.forRoot(typeOrmConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
