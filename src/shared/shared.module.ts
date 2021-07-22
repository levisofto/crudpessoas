import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { CityService } from '../city/city.service'

@Module({
    imports: [CommandModule, CityService],
})
export class SharedModule {}