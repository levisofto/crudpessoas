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
        return this.personRepository.find();
    }

    getById(id: number) {
        const person = this.personRepository.findOne(id);
        return person;
    }

    create(person: CreatePersonDto) {
        const response = this.personRepository.create(person);
        this.personRepository.save(response);

        return response;
    }

    async update(person: UpdatePersonDto) {
        const personArray = await this.getById(person.id);
        personArray.nome = person.nome === undefined ? personArray.nome : person.nome
        personArray.cpf = person.cpf === undefined ? personArray.cpf : person.cpf
        this.personRepository.save(personArray);
        return personArray;
    }

    async delete(id: number) {
        const [person] = await this.personRepository.findByIds([id]);
        this.personRepository.delete(person.id);
    }
}
