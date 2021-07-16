/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from '../person.repository';
import { CreatePersonDto } from "../dto/create-person.dto";
import { UpdatePersonDto } from '../dto/update-person.dto'

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonRepository)
        private personRepository: PersonRepository,
    ) { }

    getAll() {
        return this.personRepository.find({
          relations: ['address']
        });
    }

    getById(id: number) {
      const person = this.personRepository.findOne(id, {
        relations: ['address']  
      });
      
      return person;
    }

    async create(person: CreatePersonDto) {
      try {
          const response = this.personRepository.create(person);
          await this.personRepository.save(response)

          return response;
        } catch (error) {
          return {
            code: error.code,
            error: error.message
          }
        }
    }

    async update(person: UpdatePersonDto) {
      try {
        const personArray = await this.getById(person.id);
        personArray.nome = person.nome === undefined ? personArray.nome : person.nome
        personArray.cpf = person.cpf === undefined ? personArray.cpf : person.cpf
        personArray.address = person.address === undefined ? personArray.address : person.address
        this.personRepository.save(personArray);
        return personArray;
      } catch (error) {
        return {
          code: error.code,
          error: error.message
        }
      }
    }

    async delete(id: number) {
        const [person] = await this.personRepository.findByIds([id]);
        this.personRepository.delete(person.id);
    }
}
