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
import { ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger'
import { PersonRegister, PersonList, PersonUpdate } from '../swagger/entities/person.entitie'
import { ListPersonDto } from './dto/list-user.dto';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('people')
export class PeopleController {
   constructor(private personService: PersonService) { }

   @Get()
   @ApiCreatedResponse({
      status: 200,
      description: 'user list'
   })
   @ApiResponse({ type: [PersonList] })
   async getAll() {
      return this.personService.getAll();
   }

   @Get(':id')
   @ApiCreatedResponse({
      status: 200,
      description: 'user unique'
   })
   @ApiResponse({ type: PersonList })
   async getById(@Param('id') id: number): Promise<ListPersonDto> {
      return this.personService.getById(id);
   }

   @Post()
   @ApiCreatedResponse({
      status: 200,
      description: 'user registration'
   })
   @ApiBody({ type: PersonRegister })
   async create(@Body() person: CreatePersonDto){
      return this.personService.create(person);
   }

   @Put(':id')
   @ApiBody({ type: PersonUpdate })
   async update(
      @Param('id') id: number,
      @Body() person: UpdatePersonDto,
   ): Promise<UpdatePersonDto> {
      person.id = id
      return this.personService.update(person);
   }

   @Delete(':id')
   @ApiCreatedResponse({
      status: 200,
      description: 'deleted user'
   })
   async delete(@Param('id') id: number) {
      this.personService.delete(id);
   }
}
