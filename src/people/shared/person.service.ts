import { Injectable } from "@nestjs/common";
import { Person } from "./person.entity"; //alter person to personEntity
import { PersonDto } from "../dto/create-person.dto";
@Injectable()

export class PersonService {
/*
    getAll(){
       return this.people;
    }

    getById(id: number){
       const person = this.people.find((value) => value.id == id);
       return person;
    }
*/
    async create(personDto: PersonDto){
        const person = new Person();
        person.nome = personDto.nome;
        person.cpf = personDto.cpf;
        
        await person.save();        
        return person;
    }
/*
    update(person: Person){
        const personArray = this.getById(person.id);
        if (personArray){
            personArray.nome = person.nome;
            personArray.cpf = person.cpf;
        }
       
        return personArray;

    }

    delete(id: number){
        const index =  this.people.findIndex((value) => value.id == id);
        this.people.splice(index, 1);
    }
*/

}