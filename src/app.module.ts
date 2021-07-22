import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './database/database.providers';
import { ConfigModule } from '@nestjs/config';
import { CityModule } from './city/city.module';
import { CommandModule } from 'nestjs-command';
import 'reflect-metadata';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PeopleModule,
    TypeOrmModule.forRoot(typeOrmConfig()),
    CityModule,
    CommandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
