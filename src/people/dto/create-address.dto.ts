import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsObject } from 'class-validator';
import { CreatePersonDto } from './create-person.dto';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @Type(() => CreatePersonDto)
  person: CreatePersonDto;
}
