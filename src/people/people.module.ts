import { Module } from '@nestjs/common';
import { PersonService } from './shared/person.service';
import { PeopleController } from './people.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRepository } from './person.repository';

@Module({
    imports: [TypeOrmModule.forFeature([PersonRepository])],
    controllers: [PeopleController],
    providers: [PersonService],
})
export class PeopleModule { }
