import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger'
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) { }

  @Post()
  @ApiCreatedResponse({
    status: 200,
    description: 'city registration'
  })
  create(@Body() city: CreateCityDto) {
    return this.cityService.create(city);
  }

  @Get()
  @ApiCreatedResponse({
    status: 200,
    description: 'city list'
  })
  //  @ApiResponse({ type: [CityList] })
  findAll() {
    const citys = this.cityService.findAll();
    return citys;
  }

  @Get(':id')
  @ApiCreatedResponse({
    status: 200,
    description: 'city unique'
  })
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.update(+id, updateCityDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({
    status: 200,
    description: 'deleted city'
  })
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
