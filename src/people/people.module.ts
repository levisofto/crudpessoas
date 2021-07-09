import { Module } from "@nestjs/common";
import { PersonService } from "./shared/person.service";
import { PeopleController } from "./people.controller";

@Module({
    controllers: [PeopleController],
    providers: [PersonService]
})

export class PeopleModule {}