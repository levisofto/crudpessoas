import { EntityRepository, Repository } from 'typeorm';

import { Person } from '../entity/person.entity';

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {
    async list(){
        return this.createQueryBuilder("person")
        .leftJoinAndSelect("person.address", "addresses")
        .leftJoinAndSelect("addresses.city", "city")
        .getMany()
    }
       
 }


//to do colocar as query builders aqui (https://typeorm.io/#/select-query-builder)