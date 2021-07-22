import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CityRepository } from './city.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CityRepository])],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
