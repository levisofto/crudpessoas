import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CityRepository } from './city.repository';
import { getConnection } from 'typeorm';
import { City } from 'src/entity/city.entity';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(CityRepository)
    private CityRepository: CityRepository,)
    {}

  async create(city: CreateCityDto) {
    const response = this.CityRepository.create(city);
      
      await this.CityRepository
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

  findAll() {
    return this.CityRepository.list();
  }

  findOne(id: number) {
    const city = this.CityRepository.findOne(id);
    return city;
  }

  async update(id: number, city: UpdateCityDto) {
    const cityArray = await this.findOne(city.id);
      
      cityArray.name = city.name === undefined ? cityArray.name : city.name
        
      this.CityRepository
        .save(cityArray)
        .catch(error => {
          throw new HttpException({
            statusCode: HttpStatus.BAD_REQUEST,
            message: [ error.message ],
            error: 'Bad Request',
          }, HttpStatus.BAD_REQUEST);
        });
        
      return cityArray;
  }

  async remove(id: number) {
    const [city] = await this.CityRepository.findByIds([id]);
      
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(City)
      .where(city)
      .execute();
  }
}
