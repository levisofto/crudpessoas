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
    const city = await this.CityService.create({
        name: 'Salvador',
    });
    console.log(city);
}
}