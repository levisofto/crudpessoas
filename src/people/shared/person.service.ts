/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from '../person.repository';
import { CreatePersonDto } from "../dto/create-person.dto";
import { UpdatePersonDto } from '../dto/update-person.dto'
import { getConnection } from 'typeorm';
import { Person } from 'src/entity/person.entity';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonRepository)
        private personRepository: PersonRepository,
    ) { }

    getAll() {
        return this.personRepository.list();
    }

    getById(id: number) {
      const person = this.personRepository.listById(id);
      
      return person;
    }

    async create(person: CreatePersonDto) { //to do: adicionar regra de negocio (fazer find nas cidades) para saber se a cidade existe (criar um city.service)
      const response = this.personRepository.create(person);
      
      await this.personRepository
        .save(response)
        .catch((error) => {
          throw new HttpException({
            statusCode: HttpStatus.BAD_REQUEST,
            message: [ error.message ],
            error: 'Bad Request',
          }, HttpStatus.BAD_REQUEST);              
        });

      return response;
    }

    async update(person: UpdatePersonDto) {
      const personArray = await this.getById(person.id);
      
      personArray.nome = person.nome === undefined ? personArray.nome : person.nome
      personArray.cpf = person.cpf === undefined ? personArray.cpf : person.cpf
      personArray.address = person.address === undefined ? personArray.address : person.address
        
      this.personRepository
        .save(personArray)
        .catch(error => {
          throw new HttpException({
            statusCode: HttpStatus.BAD_REQUEST,
            message: [ error.message ],
            error: 'Bad Request',
          }, HttpStatus.BAD_REQUEST);
        });
        
      return personArray;
    }

    async delete(id: number) {
      const [person] = await this.personRepository.findByIds([id]);
      
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Person)
        .where(person)
        .execute();
    }
}
