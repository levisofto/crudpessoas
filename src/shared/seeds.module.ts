import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { CitySeed } from '../modules/city/seeds/city.seed';
import { SharedModule } from './shared.module';

@Module({
    imports: [CommandModule, SharedModule],
    providers: [CitySeed],
    exports: [CitySeed],
})
export class SeedsModule {}