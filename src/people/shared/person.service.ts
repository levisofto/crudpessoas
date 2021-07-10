/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from '../person.repository';
import { Person } from './person';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonRepository)
        private personRepository: PersonRepository,
    ) { }
    people: Person[] = [
        { id: 1, nome: 'Teste', cpf: '123123123' },
        { id: 2, nome: 'Teste1', cpf: '2312312' },
        { id: 3, nome: 'Teste2', cpf: '123214124123123' },
        { id: 4, nome: 'Teste3', cpf: '13123' },
        { id: 5, nome: 'Teste4', cpf: '231' },
        { id: 6, nome: 'Teste5', cpf: '11231223123123' },
        { id: 7, nome: 'Teste6', cpf: '231123' },
        { id: 8, nome: 'Teste7', cpf: '123231123123' },
        { id: 9, nome: 'Teste8', cpf: '2131' },
        { id: 10, nome: 'Teste9', cpf: '123312321123123' },
    ];

    getAll() {
        return this.personRepository.find();
    }

    getById(id: number) {
        const person = this.personRepository.find({
            where: {
                id,
            },
        });
        return person;
    }

    create(person: Person) {
        const response = this.personRepository.create(person);
        this.personRepository.save(response);

        return response;
    }

    async update(person: Person) {
        const [personArray] = await this.getById(person.id);
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
