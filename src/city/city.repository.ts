import { EntityRepository, Repository } from 'typeorm';

import { City } from '../entity/city.entity';

@EntityRepository(City)
export class CityRepository extends Repository<City> {
    async list(){
        return this.createQueryBuilder("city")
        .getMany()
    }
       
 }