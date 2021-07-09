/* eslint-disable prettier/prettier */
import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   Post,
   Put,
} from '@nestjs/common';
import { PersonService } from './shared/person.service';
import { Person } from './shared/person';

@Controller('people')
export class PeopleController {
   constructor(private personService: PersonService) { }

   @Get()
   async getAll(): Promise<Person[]> {
      return this.personService.getAll();
   }

   @Get(':id')
   async getById(@Param('id') id: number): Promise<Person> {
      return this.personService.getById(id);
   }

   @Post()
   async create(@Body() person: Person): Promise<Person> {
      return this.personService.create(person);
   }

   @Put(':id')
   async update(
      @Param('id') id: number,
      @Body() person: Person,
   ): Promise<Person> {
      person.id = id;
      return this.personService.update(person);
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
      this.personService.delete(id);
   }
}
