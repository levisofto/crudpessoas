import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { City } from 'src/entity/city.entity';
import { CreatePersonDto } from './create-person.dto';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  state: string;

  @IsInt()
  @IsNotEmpty()
  city: City;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @Type(() => CreatePersonDto)
  person: CreatePersonDto;
}
