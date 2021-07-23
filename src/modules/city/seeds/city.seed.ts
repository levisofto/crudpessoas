import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { CityService } from '../../../city/city.service';

@Injectable()
export class CitySeed {
constructor(
    private readonly CityService: CityService,
) { }

@Command({ command: 'create:city', describe: 'create a city', autoExit: true })
async create() {
  const cities = [
    { name: 'Salvador' },
    { name: 'Vitória da Conquista' },
    { name: 'Camaçari' },
    { name: 'Ilhéus' },
    { name: 'Porto Seguro' },
  ]

  for(let city of cities) {
    const response = await this.CityService.create(city);

    console.log(response);
  }
}
}